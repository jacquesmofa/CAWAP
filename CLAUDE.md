# CLAUDE.md: CAWAP website

English-language site for CAWAP (an EN/FR switcher exists but translates nothing yet), live at https://www.cawap.ca. Originally a Readdy export; fully editable since 10 Nov 2026. Studio-wide rules: the "PRO Website Builder" Claude project (stack-decisions.md, brand-dna.md).

## Stack and deploy
- Vite 7 + React 19 + TypeScript + Tailwind 3 + React Router 7, i18next (EN/FR strings in `src/i18n/locales/`).
- Build output: `out/` (not `dist/`).
- Deploy: `.github/workflows/deploy.yml` builds on every push to `main` and uploads `out/` to HostGator by FTP (secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`). A failed build uploads nothing.
- Owner's choice (10 Nov 2026): Claude may push straight to `main`, but only after `npm ci && npm run build` passes locally and changes are verified.

## Editable content (all phases done 10 Nov 2026)
Everything client-facing is in `src/content/` and editable in both editors:
- `site.json` (name, contact, socials), `navigation.json` (header + mobile menus), `footer.json`, `donation-banner.json`, `seo.json` (title/description per route, applied by `src/components/feature/PageSeo.tsx`), `shared.json` (search index, impact map, gallery viewer, programs hub).
- `pages/<page>.json` for Home, About, Programs, Food Bank, Gallery, Contact, Donate, Upcoming/Past Events, Christmas Event, Trainings, Heart Wise Seniors, Mental Health, Javascript Program, 404. Components import it as `copy` and read `copy.<section>.<key>`; section names come from the JSX section comments.
- `programs/<slug>.json` for the 10 program pages that share `src/components/feature/ProgramPage.tsx`.
- `events.json`, `trainings.json` (objects with an `items` array; loaded by `src/data/flyers.ts` / `trainings.ts`).
- `public/media/site-assets.json` (fetched at runtime by `MediaContext`): numbered server media (`/media/<folder>/<n>.<ext>`, uploaded by FTP, never deleted by deploys) plus `addedPhotos` per gallery category uploaded in the editors (shown first). Home hero slides have an optional `image` that overrides `/media/hero/<n>.png`.
- `public/sitemap.xml`, `public/robots.txt` (update the sitemap when routes change).

## Share previews (11 Nov 2026)
- `src/content/seo.json`: `site` (name, address, default share picture: /media/hero/4.png, 1600×1200) + `pages` (title, description, optional `image`). Editable in both editors ("Google: page titles & descriptions").
- `scripts/social-pages.mjs` runs inside `npm run build`: writes one HTML file per page (e.g. `out/food-bank.html`) with that page's title, description, canonical and picture, plus `sitemap.xml`. Social apps never run JavaScript, so this is what they show. `public/.htaccess` STEP 1b serves /food-bank → food-bank.html and redirects /x.html and /x/ to /x. `PageSeo.tsx` sets the same tags in the browser.
- Keep titles under 65 characters and descriptions 120–160.

## Editors
- Pages CMS (`.pages.yml`, people without GitHub; app.pagescms.org) and Sveltia CMS (`public/admin/config.yml`, people with GitHub; https://www.cawap.ca/admin/). BOTH ARE GENERATED: `npm run cms:config` builds them from the JSON files (types inferred) + `scripts/cms-registry.mjs` (which files, groups, labels, help text). `npm run cms:check` fails if they are stale. Never edit the two configs by hand.
- Adding content: new JSON file (top level must be an object) → entry in `cms-registry.mjs` → `npm run cms:config` → commit all.
- Caveat: types are inferred from current content, so if a list is empty when you regenerate, give it a hint in `FIELD_HINTS` (see `addedPhotos`).
- Uploads go to `public/media/uploads/` → served at `/media/uploads/...`.
- Sveltia "Sign In with GitHub" runs on HostGator itself: `public/api/auth.php` + `callback.php` (shared code in `oauth-common.php`; canonical origin https://www.cawap.ca, allowed origins www + bare domain). The OAuth App secret is never in the repo: the deploy workflow writes `out/api/oauth-config.php` from Actions secrets `CMS_GITHUB_CLIENT_ID` / `CMS_GITHUB_CLIENT_SECRET`; `public/api/.htaccess` blocks direct access to the helper files. `public/admin/.htaccess` disables caching for the editor. No Netlify anywhere.

## Verifying changes
`scripts/studio-tools/` (README inside): snapshot every route in headless Chrome before/after and compare. Use it for any refactor that must not change what visitors see.

## Still to do (owner decisions)
- French: the language switcher changes nothing today (the i18n files in `src/i18n/locales/` are never loaded and pages don't use them). Real French needs approved French text and a content model with `en`/`fr` files.
- Replace Readdy AI placeholder images (49 readdy.ai/api/search-image URLs remain in content, including 16 of 19 event flyers) with real photos; they can be swapped in the editors.
- Prerendering (static HTML per page) for stronger SEO.

## Known issues (not caused by phase 1)
- `npm run type-check` reports 6 pre-existing errors (CloudinaryImage, donate, christmas-event). `vite build` does not type-check, so the site builds.
- `.env` is committed; it only holds the public Supabase URL and anon key (browser-safe by design, protected by Supabase row-level security). Never add real secrets to it.
- `build.sourcemap: true` publishes source maps.

## Rules
- No new hard-coded client text, images or links in components: put them in `src/content/`.
- Never push without a passing build. Never commit secrets.
- Design changes need the owner's approval; this site keeps its own brand identity, recorded in `brand-dna.md`.
