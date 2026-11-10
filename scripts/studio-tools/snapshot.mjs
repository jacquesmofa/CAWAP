// Usage: node snapshot.mjs <outDir-to-serve> <snapshot.json>
// Serves a built site, visits every route in Chrome, records visible text,
// image sources, background images and link targets.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const [root, outFile] = process.argv.slice(2);
const routes = ['/', '/about', '/programs', '/gallery', '/contact', '/donate', '/upcoming-events', '/past-events', '/christmas-event', '/trainings', '/youth-leadership', '/capital-g-girls', '/heart-wise-seniors', '/women-empowerment', '/sankofa-royale-awards', '/food-bank', '/financial-literacy', '/javascript-program', '/children-summer-camp', '/mental-health', '/new-breed-women-of-substance', '/project-and-evaluation', '/newcomers-settlement-program', '/cultural-events', '/no-such-page'];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = join(root, url);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(root, 'index.html');
  res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(4310, r));

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
// Freeze time and randomness so carousels/dates are stable between runs.
await context.addInitScript(() => {
  Math.random = () => 0.42;
  const fixed = new Date('2026-11-10T12:00:00Z').getTime();
  const RealDate = Date;
  // eslint-disable-next-line no-global-assign
  Date = class extends RealDate {
    constructor(...a) { super(...(a.length ? a : [fixed])); }
    static now() { return fixed; }
  };
});
// Block outside network so results don't depend on remote servers.
await context.route('**/*', (route) => {
  const u = route.request().url();
  if (u.startsWith('http://localhost:4310')) return route.continue();
  return route.abort();
});

const result = {};
for (const path of routes) {
  const page = await context.newPage();
  await page.goto('http://localhost:4310' + path, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  for (let y = 0; y < 30000; y += 700) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(800);
  result[path] = await page.evaluate(() => {
    const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
    const text = document.body.innerText.split('\n').map(norm).filter(Boolean);
    const imgs = [...document.querySelectorAll('img')].map((i) => i.getAttribute('src') + ' | alt=' + (i.getAttribute('alt') ?? ''));
    const bgs = [...document.querySelectorAll('[style]')].map((e) => e.getAttribute('style')).filter((s) => s.includes('url('));
    const links = [...document.querySelectorAll('a')].map((a) => a.getAttribute('href') + ' | ' + norm(a.innerText ?? a.textContent).slice(0, 60));
    const videos = [...document.querySelectorAll('video, source, iframe')].map((v) => v.getAttribute('src'));
    return { title: document.title, text, imgs, bgs, links, videos };
  });
  await page.close();
}
// Menus that only appear on hover / tap.
{
  const page = await context.newPage();
  await page.goto('http://localhost:4310/', { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  const grab = () => page.evaluate(() => [...document.querySelectorAll('header a, header button, .fixed.inset-0 a, .fixed.inset-0 button')].map((a) => (a.getAttribute('href') ?? '') + ' | ' + (a.innerText ?? '').replace(/\s+/g, ' ').trim()));
  await page.hover('header button:has-text("Programs")');
  await page.waitForTimeout(300);
  const programs = await grab();
  await page.mouse.move(5, 600);
  await page.hover('header button:has-text("Events")');
  await page.waitForTimeout(300);
  const events = await grab();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  await page.click('header button.lg\\:hidden');
  await page.waitForTimeout(300);
  await page.click('.fixed.inset-0 button:has-text("Programs")');
  await page.click('.fixed.inset-0 button:has-text("Events")');
  await page.waitForTimeout(300);
  const mobile = await grab();
  result['#menus'] = { title: '', text: [], imgs: [], bgs: [], links: [...programs, '---', ...events, '---', ...mobile], videos: [] };
  await page.close();
}
await browser.close();
server.close();
writeFileSync(outFile, JSON.stringify(result, null, 1));
console.log('snapshot', outFile, Object.keys(result).length, 'routes');
