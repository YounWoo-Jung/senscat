import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://senscat.com',
  i18n: {
    defaultLocale: 'ko',
    locales: {
      ko: 'ko',
      en: 'en',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
});
