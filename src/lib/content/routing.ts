import { createLocaleRecord } from '@lib/i18n/locale-record';
import type { RouteSegments } from '@lib/i18n/types';
import { getCollection, type CollectionKey } from 'astro:content';
import { getEntryKey, getEntryLang, getEntrySlug } from './entries';

export async function generateCollectionRouteSegments(
  collection: CollectionKey,
): Promise<RouteSegments> {
  const entries = await getCollection(collection);

  const segments = createLocaleRecord<Record<string, string>>(() => ({}));

  for (const entry of entries) {
    const key = getEntryKey(entry);
    const lang = getEntryLang(entry);
    const slug = getEntrySlug(entry);

    segments[lang][key] = slug;
  }

  return segments;
}
