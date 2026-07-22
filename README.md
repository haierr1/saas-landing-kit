# SaaS Landing Kit — Free Edition

> **[Live demo →](https://haierr1.github.io/)**

A clean, modern **Astro + Tailwind CSS** landing-page template for SaaS and
indie products. This is the **free teaser edition**: a single, polished landing
page plus a styled 404, ready to rebrand in five minutes.

- ⚡ Astro 5 + Tailwind CSS 4 — fully static output, deploy anywhere
- 🎨 Rebrand from **one config file** (`src/config/site.ts`)
- 🌗 Dark / light mode, responsive, keyboard-accessible
- 🚫 No runtime CDNs — system fonts, self-contained

> Looking for GDPR legal pages, a cookie-consent banner, pricing and a blog?
> Those live in the paid **EU-Ready SaaS Landing Kit** — see
> [Upgrade](#upgrade--eu-ready-saas-landing-kit) below.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in ./dist
npm run preview  # preview the production build
```

Requires Node 18.20+ / 20.3+ / 22+.

---

## The 5-minute rebrand

Everything that makes this "your" site lives in **`src/config/site.ts`**.

1. **Name, tagline, description** — top of the file. Used in the logo, page
   titles and meta tags.
2. **Brand colour** — `brand.primary` (one hex value). Every button, link and
   accent updates automatically. Set `primaryHover` and `primaryFg` (text on top
   of the accent) to match.
3. **Font** — `brand.fontSans`. System-font stack by default (zero network, zero
   bundle). To self-host a font: drop the files in `public/`, add an
   `@font-face` rule in `src/styles/global.css`, then put the family name here.
4. **Logo** — text by default. For an image, drop it in `public/` and set
   `logoImage: '/your-logo.svg'`.
5. **Navigation and social links** — same file.

Then edit the marketing copy in **`src/config/content.ts`** (hero, features,
testimonials, FAQ, CTA).

Colours and fonts are injected as CSS variables from the config, so the
`bg-brand` / `text-brand` utilities used throughout follow whatever you set.

---

## Project structure

```
src/
  config/
    site.ts        ← brand, identity, nav, social (START HERE)
    content.ts     ← landing copy
  components/      ← Header, Footer, Hero, Features, Testimonials, FAQ, CTA, …
  layouts/BaseLayout.astro
  pages/
    index.astro    ← landing
    404.astro
  styles/global.css← Tailwind entry, brand token defaults
public/            ← favicon and any static assets
```

---

## Deploying

The build produces a static site in `dist/` — host it anywhere. Set your real
domain in **`astro.config.mjs`** (`site:`) and in `src/config/site.ts` (`url`).

- **Vercel / Netlify / Cloudflare Pages** — framework preset **Astro**
  (auto-detected), build command `npm run build`, output directory `dist`. No
  environment variables needed.
- **Any static host** (GitHub Pages, S3 + CloudFront, nginx) — serve `dist/`.

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), a skip-to-content
  link, visible focus rings, and `aria` attributes on interactive widgets.
- `prefers-reduced-motion` is respected.
- No render-blocking web fonts, no third-party requests at runtime.
- Dark mode has no flash (theme is applied before first paint).

---

## Upgrade → EU-Ready SaaS Landing Kit

This free edition is the landing page only. The **paid EU-Ready SaaS Landing
Kit** is the same template with the EU-compliance layer already done — the part
that turns a nice landing page into a shippable EU product:

- **Pricing page** — three tiers with a monthly/yearly billing toggle, all
  driven from config.
- **Markdown blog** — an index plus a dynamic `[...slug]` route; drop in a `.md`
  file and it publishes.
- **GDPR legal skeletons** — privacy policy, terms of service, cookie policy and
  imprint/impressum, structured with clearly marked `[PLACEHOLDER]` fields (they
  render in red until you fill them, so nothing unfinished ships).
- **Working cookie-consent banner** — dependency-free, stores the choice in
  `localStorage`, granular Accept / Reject / Preferences, plus a "Manage
  cookies" reopen link. It actually **gates non-essential scripts**: tag
  analytics/marketing with `type="text/plain" data-consent="…"` and they stay
  inert until the visitor opts in.
- About and contact pages, extra footer/nav wiring, and a fuller README.

> The legal pages are structured starting points, **not legal advice** — fill in
> every placeholder and have a qualified lawyer review before you publish.

**Get the full kit → https://haierr1.github.io/ (full kit launching soon — watch this repo)**

---

## License

See [LICENSE.md](./LICENSE.md). In short: unlimited end products for you, but you
may not resell or redistribute the template itself.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

---

_Free edition. The EU-compliance layer (GDPR legal pages + cookie consent) ships
in the paid **EU-Ready SaaS Landing Kit** → https://haierr1.github.io/ (full kit launching soon — watch this repo)._
