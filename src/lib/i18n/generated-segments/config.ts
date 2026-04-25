import type { CollectionKey } from 'astro:content';

export const localizedCollections = [
  'legal',
  'blog',
  'projects',
] as const satisfies readonly CollectionKey[];
