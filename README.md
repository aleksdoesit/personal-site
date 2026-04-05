# personal-site

Personal portfolio (React + TypeScript + Vite). Live at [imaleks.dev](https://imaleks.dev).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve `dist/` locally
- `npm run lint` — ESLint

## Deploy

**Important (Vite):** Production is whatever `npm run build` writes to **`dist/`**. The root `index.html` is only for development and points at `/src/main.tsx`. If your host serves the repo root instead of `dist/`, the browser will request `.tsx` files and you will see **MIME type `application/octet-stream`** and a broken app.

### Netlify

This repo includes [`netlify.toml`](netlify.toml):

- **Build command:** `npm run build`
- **Publish directory:** `dist`

In the Netlify UI: **Site configuration → Build & deploy → Build settings** must match (or leave blank to use `netlify.toml`). After changing settings, trigger a new deploy.

### Other hosts

Upload or sync the **contents** of `dist/` to the site root (not the whole monorepo).

### Assets

Ensure files exist under `public/assets/` so they are copied into `dist/assets/` (images, CV PDF, favicon PNGs under `public/assets/Favicon/` including those referenced in [`site.webmanifest`](public/assets/Favicon/site.webmanifest)).
