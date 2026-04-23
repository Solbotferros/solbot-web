import { createLocaleRecord } from '@lib/i18n/locale-record';
import type { RouteSegments } from '@lib/i18n/types';
import { getCollection, type CollectionKey } from 'astro:content';
import { parseLocalizedEntryId } from './entries';

export async function generateCollectionRouteSegments(
  collection: CollectionKey,
): Promise<RouteSegments> {
  const entries = await getCollection(collection);

  const segments = createLocaleRecord<Record<string, string>>(() => ({}));

  for (const entry of entries) {
    const { key, lang } = parseLocalizedEntryId(entry.id);

    const data = entry.data as { localizedSlug?: string };
    segments[lang][key] = data.localizedSlug ?? key;
  }

  return segments;
}
