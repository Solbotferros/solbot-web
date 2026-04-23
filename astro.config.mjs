// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { defaultLang, locales } from './src/lib/i18n/locales';
import { routingConfig } from './src/lib/i18n/routing-config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: locales,
    routing: routingConfig,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});
