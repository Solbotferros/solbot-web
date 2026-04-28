import type { CollectionEntry } from 'astro:content';

export const formatProjectLocation = (
  location?: CollectionEntry<'projects'>['data']['location'],
) => {
  if (!location) return '';

  return location.area ? `${location.name}, ${location.area}` : location.name;
};
