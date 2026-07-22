/**
 * ============================================================================
 *  EU-Ready SaaS Landing Kit — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Rebrand the whole site from this one file. See README.md → "5-minute rebrand".
 *
 *  What lives here: brand colours, fonts, logo, all page copy, pricing,
 *  navigation, and the company details that flow into the legal pages.
 *
 *  Colours & font are injected as CSS variables in BaseLayout.astro, so every
 *  `bg-brand` / `text-brand` / font utility updates when you edit them below.
 * ============================================================================
 */

export const site = {
  /* ---- Identity ---------------------------------------------------------- */
  name: 'Northwind',
  // Short tagline used in <title> and meta description fallback.
  tagline: 'Analytics that ship themselves',
  description:
    'Northwind turns your product events into weekly, plain-English reports your whole team actually reads. Set up in five minutes, no data team required.',
  // Production URL (also set `site` in astro.config.mjs to match).
  url: 'https://example.com',
  // Logo is text by default. To use an image, drop it in /public and set
  // `logoImage` to e.g. '/logo.svg'; the text still shows as alt/fallback.
  logoImage: '' as string,

  /* ---- Brand tokens ------------------------------------------------------ */
  // One accent colour drives the whole design. Pick any hex.
  brand: {
    primary: '#4f46e5',      // buttons, links, accents (light + dark base)
    primaryHover: '#4338ca', // hover state
    primaryFg: '#ffffff',    // text/icon colour on top of primary
    // Font families. These are system-font stacks by default (zero network,
    // zero bundle). To self-host a font, add it to /public, @font-face it in
    // src/styles/global.css, then reference the family name here.
    fontSans:
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontDisplay:
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  /* ---- Navigation -------------------------------------------------------- */
  nav: [
    { label: 'Features', href: '/#features' },
  ],
  // Primary call-to-action button in the header.
  headerCta: { label: 'Start free', href: '#features' },

  /* ---- Social / contact -------------------------------------------------- */
  contactEmail: 'hello@northwind.example',
  supportEmail: 'support@northwind.example',
  social: [
    { label: 'X', href: 'https://x.com/example' },
    { label: 'GitHub', href: 'https://github.com/example' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/example' },
  ],
} as const;

export type Site = typeof site;
