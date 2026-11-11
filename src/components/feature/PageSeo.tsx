import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seo from '../../content/seo.json';

// Page titles, Google descriptions and share pictures: src/content/seo.json
// (editable in the website editors under Site settings → "Google: page titles & descriptions").
// Social apps (Facebook, WhatsApp, LinkedIn, X) never run this code: they read the static
// page that scripts/social-pages.mjs writes for every address at build time, from the same file.
function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

const PageSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const page = seo.pages.find((p) => p.path === path);
    if (!page) return;
    const title = page.title || seo.site.name;
    const description = page.description || '';
    const url = seo.site.url.replace(/\/$/, '') + (path === '/' ? '/' : path);
    const base = seo.site.url.replace(/\/$/, '');
    const pic = page.image || seo.site.image;
    const image = /^https?:\/\//.test(pic) ? pic : `${base}/${pic.replace(/^\/+/, '')}`;
    const imageAlt = page.image ? title : seo.site.imageAlt;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', imageAlt);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', imageAlt);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);

  return null;
};

export default PageSeo;
