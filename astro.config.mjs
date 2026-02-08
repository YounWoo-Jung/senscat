import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://senscat.com',
  integrations: [
    tailwind(),
    // sitemap({
    //   i18n: {
    //     defaultLocale: 'ko',
    //     locales: {
    //       ko: 'ko',
    //       en: 'en',
    //     },
    //     routing: {
    //       prefixDefaultLocale: false
    //     }
    //   },
    // }),
  ],
  output: 'static',
});
