/**
 * Marketing copy for the landing + pricing pages.
 * Separate from site.ts so branding and copy stay independent — edit freely.
 */

export const hero = {
  eyebrow: 'Product analytics, minus the dashboard graveyard',
  title: 'Ship analytics that read themselves',
  subtitle:
    'Northwind turns raw product events into a plain-English report in your inbox every Monday. No SQL, no dashboards nobody opens — just the three numbers that moved and why.',
  primaryCta: { label: 'Start free — no card', href: '#features' },
  secondaryCta: { label: 'See the features', href: '#features' },
  // Small trust line under the buttons.
  note: 'Free for 14 days · GDPR-ready · Hosted in the EU',
};

export const features = {
  title: 'Everything you need, nothing you have to babysit',
  subtitle:
    'Northwind connects in minutes and does the analysis a data team would — automatically.',
  items: [
    {
      icon: 'bolt',
      title: 'Five-minute setup',
      body: 'Drop in one snippet or connect your warehouse. No tracking plan, no schema meetings.',
    },
    {
      icon: 'chart',
      title: 'Reports, not dashboards',
      body: 'A written weekly summary of what changed, ranked by impact — the way a colleague would explain it.',
    },
    {
      icon: 'shield',
      title: 'EU-hosted & GDPR-ready',
      body: 'Data stays in Frankfurt. A signed DPA, a data-processing register, and cookie consent come standard.',
    },
    {
      icon: 'users',
      title: 'Built for the whole team',
      body: 'Marketing, product and founders each get the slice that matters to them — same source of truth.',
    },
    {
      icon: 'plug',
      title: 'Connects to your stack',
      body: 'Slack, email, Notion, and a clean API. Push a report anywhere your team already looks.',
    },
    {
      icon: 'lock',
      title: 'Private by default',
      body: 'No third-party ad pixels, no reselling. Your data is yours — export or delete it anytime.',
    },
  ],
};

export const testimonials = {
  title: 'Teams that stopped guessing',
  items: [
    {
      quote:
        'We cancelled two dashboards and a standing meeting. The Monday report is the only analytics anyone actually reads now.',
      name: 'Mara Ellison',
      role: 'Head of Growth, Fernweh',
    },
    {
      quote:
        'Setup genuinely took five minutes. By the next week we caught a churn spike we would have missed for a month.',
      name: 'Daniel Okafor',
      role: 'Founder, Lumen Tools',
    },
    {
      quote:
        'As a solo founder I do not have a data person. Northwind is my data person. Worth every euro.',
      name: 'Priya Raman',
      role: 'Founder, Sundial',
    },
  ],
};

export const faq = {
  title: 'Questions, answered',
  items: [
    {
      q: 'Do I need a data team or SQL knowledge?',
      a: 'No. Northwind writes the analysis for you in plain language. If you can read an email, you can use it.',
    },
    {
      q: 'Where is my data stored?',
      a: 'On EU infrastructure in Frankfurt, Germany. We offer a signed Data Processing Agreement and never sell or share your data.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most teams are live in under five minutes with a single snippet or a warehouse connection. No tracking plan required upfront.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Plans are month-to-month, cancel in one click, and you can export all of your data on the way out.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Every plan starts with a 14-day free trial. No credit card needed to begin.',
    },
  ],
};

export const cta = {
  title: 'Your first report is one snippet away',
  subtitle: 'Start free, cancel anytime. See what your product data has been trying to tell you.',
  primary: { label: 'Start free', href: '#features' },
  secondary: { label: 'See the features', href: '#features' },
};
