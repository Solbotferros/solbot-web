import type { CollectionKey } from 'astro:content';

export const localizedCollections = [
  'legal',
  'blog',
  'projects',
  'services',
] as const satisfies readonly CollectionKey[];
