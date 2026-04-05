# personal-site

Personal portfolio (React + TypeScript + Vite). Live at [imaleks.dev](https://imaleks.dev).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve `dist/` locally
- `npm run lint` — ESLint

## Deploy

Production output is **`dist/`** after `npm run build`. Do not publish the repo root (the root `index.html` is for Vite dev only).

### Netlify

[`netlify.toml`](netlify.toml) sets **publish = `dist`**, **`NODE_VERSION = "20"`**, and an SPA fallback. Netlify’s old default Node breaks the build with `SyntaxError: Unexpected token ?` inside `tsc` — Node 20 fixes that. [`.nvmrc`](.nvmrc) also pins `20` for local `nvm use`.

Ensure assets live under `public/assets/` so they copy into `dist/assets/` (images, CV PDF, favicons referenced by `site.webmanifest`).
