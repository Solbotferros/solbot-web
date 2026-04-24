import type { CollectionKey } from 'astro:content';

export const localizedCollections = ['legal', 'blog'] as const satisfies readonly CollectionKey[];
