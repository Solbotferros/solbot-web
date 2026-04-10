// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { locales, defaultLang } from './src/lib/i18n/locales';
import { routingConfig } from '@lib/i18n/router';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: locales,
    routing: routingConfig,
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
