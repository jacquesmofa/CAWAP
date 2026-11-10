# CLAUDE.md: CAWAP website

Bilingual (EN/FR) site for CAWAP, live at https://www.cawap.ca. Originally a Readdy export, being made editable in phases. Studio-wide rules: the "PRO Website Builder" Claude project (stack-decisions.md, brand-dna.md).

## Stack and deploy
- Vite 7 + React 19 + TypeScript + Tailwind 3 + React Router 7, i18next (EN/FR strings in `src/i18n/locales/`).
- Build output: `out/` (not `dist/`).
- Deploy: `.github/workflows/deploy.yml` builds on every push to `main` and uploads `out/` to HostGator by FTP (secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`). A failed build uploads nothing.
- Owner's choice (10 Nov 2026): Claude may push straight to `main`, but only after `npm ci && npm run build` passes locally and changes are verified.

## Editable content (phase 1 done 10 Nov 2026)
- `src/content/events.json` → events/flyers (`src/data/flyers.ts` loads it; past/upcoming is decided by date).
- `src/content/trainings.json` → trainings (`src/data/trainings.ts` loads it).
- Both files are objects with an `items` array (Sveltia/Decap need an object at the top level).
- Two editors on the same files, keep both configs in sync when adding a field:
  - Pages CMS: `.pages.yml` (people without GitHub; app.pagescms.org).
  - Sveltia CMS: `public/admin/config.yml` (people with GitHub; https://www.cawap.ca/admin/).
- Sveltia "Sign In with GitHub" runs on HostGator itself: `public/api/auth.php` + `callback.php` (shared code in `oauth-common.php`; canonical origin https://www.cawap.ca, allowed origins www + bare domain). The OAuth App secret is never in the repo: the deploy workflow writes `out/api/oauth-config.php` from Actions secrets `CMS_GITHUB_CLIENT_ID` / `CMS_GITHUB_CLIENT_SECRET`; `public/api/.htaccess` blocks direct access to the helper files. `public/admin/.htaccess` disables caching for the editor. No Netlify anywhere.
- Uploads from the editors go to `public/media/uploads/` → served at `/media/uploads/...`.
- Older media lives on the server in `/media/<folder>/<n>.<ext>` (uploaded by FTP, described by `public/media/site-assets.json` and `src/context/MediaContext.tsx`). FTP deploys never delete it.

## Next phases (planned)
2. Home page sections, contact details, footer, social links → content files.
3. Program pages (food bank, seniors, youth, women…) → content files, EN + FR.
4. Gallery and hero slides editable without FTP; replace Readdy AI placeholder images (16 of 19 event flyers use readdy.ai search-image URLs).
5. Prerendering, per-page SEO, sitemap.

## Known issues (not caused by phase 1)
- `npm run type-check` reports 6 pre-existing errors (CloudinaryImage, donate, christmas-event). `vite build` does not type-check, so the site builds.
- `.env` is committed; it only holds the public Supabase URL and anon key (browser-safe by design, protected by Supabase row-level security). Never add real secrets to it.
- `build.sourcemap: true` publishes source maps.

## Rules
- No new hard-coded client text, images or links in components: put them in `src/content/`.
- Never push without a passing build. Never commit secrets.
- Design changes need the owner's approval; this site keeps its own brand identity.
