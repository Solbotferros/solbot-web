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

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      localizedSlug: z.string(),
      description: z.string(),

      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      draft: z.boolean().default(false),
      featured: z.boolean().default(false),

      category: z.string().optional(),
      tags: z.array(z.string()).default([]),

      coverImage: image().optional(),
      coverAlt: z.string().optional(),

      cta: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),

      seoTitle: z.string().optional(),
      canonical: z.url().optional(),
      noindex: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      localizedSlug: z.string(),

      location: z.string().optional(),
      sector: z.enum([
        'industry',
        'architecture_and_renovations',
        'private_clients',
        'hospitality_and_events',
        'agriculture',
      ]),
      service: z.string().optional(),

      cover: image(),
      coverAlt: z.string(),

      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
          }),
        )
        .default([]),

      homePreview: z.boolean().default(false),
      featured: z.boolean().default(false),
      order: z.number().default(999),
    }),
});

export const collections = {
  legal,
  blog,
  projects,
};
