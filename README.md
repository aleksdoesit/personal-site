# personal-site

Personal portfolio (React + TypeScript + Vite). Live at [imaleks.dev](https://imaleks.dev).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve `dist/` locally
- `npm run lint` — ESLint

## Deploy

Build the site, then upload the contents of `dist/` to your static host (same as before: any host that serves static files at the domain root works with `base: '/'` in Vite).

Ensure binary assets exist under `public/assets/` (for example `profile.png`, `tempProfilePic.jpg`, `robotrivia.png`, `bingr.png`, CV PDF, and full favicon PNGs referenced by `site.webmanifest`).
