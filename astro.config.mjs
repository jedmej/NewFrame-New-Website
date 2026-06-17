// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// React is needed only in dev, to render the DialKit typography tuner island.
// Registering it conditionally keeps the React renderer chunk out of the
// production build entirely (astro build sets NODE_ENV=production).
const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://newframe.studio',
  compressHTML: true,
  integrations: [
    // React is enabled solely to render the dev-only DialKit typography tuner
    // (src/components/dev/DialKitPanel.tsx). Dev-only, so no React ships to prod.
    ...(isDev ? [react()] : []),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pl: 'pl',
        },
      },
      filter: (page) => !page.endsWith('newframe.studio/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
