# Citywide Phoenix Plumber

Marketing site for a Phoenix-area plumbing business, built with [Astro](https://astro.build). Component-based source that compiles to plain static HTML.

## Develop locally

Requires [Node.js](https://nodejs.org) 18.20+ (or 20+).

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to ./dist
npm run preview  # preview the built site
```

## Project structure

```
src/
  data/
    site.js        # business details (phone, email, license) — edit these once
    services.js    # the four services, used by the home + services pages
  layouts/
    Layout.astro   # shared <head>, header, footer, and client script
  components/
    Header.astro   Footer.astro   CtaBand.astro   Icon.astro
  pages/
    index.astro    services.astro   about.astro
    service-area.astro   contact.astro
  styles/
    global.css     # all styling
```

Each file in `src/pages/` becomes a route (e.g. `services.astro` -> `/services`).

## Before going live — edit `src/data/site.js`

- `phone` / `phoneHref` — your real number (keep the digits in sync)
- `email`
- `roc` — your Arizona ROC license number
- `formEndpoint` — paste a [Formspree](https://formspree.io) (or similar) URL so the
  contact form emails you. Until then the form opens the visitor's email app instead.

Also update the sample testimonials in `src/pages/about.astro`.

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes automatically.

1. Push to the `main` branch.
2. In the repo: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
3. The site publishes at `https://bobinfoley.github.io/citywide-phoenix-plumber/`.

`astro.config.mjs` sets `base: '/citywide-phoenix-plumber'` to match the repo name.
If you move to a custom domain or a user/org page served at the root, change `base` to `'/'`.
