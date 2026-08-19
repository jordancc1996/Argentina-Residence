import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://argentinaresidence.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy') &&
        !page.includes('/404'),
    }),
  ],
  markdown: {
    smartypants: false,
  },
  trailingSlash: 'never',
  redirects: {
    '/about-argentina': '/program',
    '/golden-visa': '/program',
    '/contact-us': '/contact',
    '/guides': '/resources',
    '/blog': '/research',
    '/blog/argentina-citizenship-by-investment-launch-date': '/research/argentina-citizenship-by-investment-launch-date',
    '/blog/argentine-investment-landscape-golden-visa-value-proposition': '/research/argentine-investment-landscape-golden-visa-value-proposition',
    '/blog/buenos-aires-real-estate-bull-market-analysis': '/research/buenos-aires-real-estate-bull-market-analysis',
    '/blog/american-dream-argentina-golden-visa-solution': '/research/american-dream-argentina-golden-visa-solution',
    '/blog/argentina-citizenship-investment-american-investors': '/research/argentina-citizenship-investment-american-investors',
    '/blog/argentina-golden-visa-american-investors-2026': '/research/argentina-golden-visa-american-investors-2026',
  },
});
