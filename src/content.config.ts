// src/content.config.ts
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const legal = defineCollection({
  loader: glob({
    base: './src/content/legal',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    localizedSlug: z.string().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  legal,
};
