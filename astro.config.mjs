// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes } from './src/i18n/ui.ts';

// PLACEHOLDER_DOMAIN: muss mit SITE_URL in src/config/site.ts übereinstimmen.
const SITE = 'https://placeholder-domain.example';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de', en: 'en' } },
      // Persönliche Hotelseiten, Danke-Seiten und 404 nicht in die Sitemap.
      filter: (page) =>
        !page.includes('/h/') &&
        !/\/(danke|thank-you)\/$/.test(page) &&
        !page.endsWith('/404/'),
      // Übersetzte Slugs (impressum ↔ imprint) kennt die i18n-Option nicht.
      // Daher die hreflang-Paare aus der Routenkarte setzen, inkl. x-default.
      serialize(item) {
        const path = new URL(item.url).pathname;
        for (const r of Object.values(routes)) {
          const de = `/${r.de ? `${r.de}/` : ''}`;
          const en = `/en/${r.en ? `${r.en}/` : ''}`;
          if (path === de || path === en) {
            item.links = [
              { lang: 'de', url: new URL(de, SITE).href },
              { lang: 'en', url: new URL(en, SITE).href },
              { lang: 'x-default', url: new URL(de, SITE).href },
            ];
          }
        }
        return item;
      },
    }),
  ],
});
