import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Persönliche Hotelseiten unter /h/<slug>/.
// noindex, nicht in Sitemap und Navigation. Der Slug endet auf einen Zufallsteil,
// damit er nicht zu erraten ist. Neue Einträge: npm run new-hotel -- "Hotel Name"
export const SLUG_PATTERN = /^[a-z0-9-]+-[a-z0-9]{10,}$/;

const hotels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hotels' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string().regex(SLUG_PATTERN, 'Slug braucht am Ende einen Zufallsteil mit mindestens 10 Zeichen'),
      hotel: z.string(),
      lang: z.enum(['de', 'en']).default('de'),
      demo: z.boolean().default(false),
      // Datum der Prüfung, nur zur Anzeige.
      checkedAt: z.string().optional(),
      issues: z
        .array(
          z.object({
            title: z.string(),
            where: z.string(),
            text: z.string(),
            screenshot: image().optional(),
            screenshotAlt: z.string().optional(),
          }),
        )
        .min(3)
        .max(5),
    }),
});

export const collections = { hotels };
