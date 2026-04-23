// src/lib/content/entries.ts
import type { Language } from '@lib/i18n/types';
import type { CollectionEntry, CollectionKey } from 'astro:content';

type LocalizedEntry = CollectionEntry<CollectionKey> & {
  data: {
    localizedSlug?: string;
  };
};

export function parseLocalizedEntryId(id: string) {
  const [key, lang] = id.split('/');

  return {
    key,
    lang: lang as Language,
  };
}

export function getEntryKey(entry: LocalizedEntry) {
  return parseLocalizedEntryId(entry.id).key;
}

export function getEntryLang(entry: LocalizedEntry) {
  return parseLocalizedEntryId(entry.id).lang;
}

export function getEntrySlug(entry: LocalizedEntry) {
  const key = getEntryKey(entry);
  return (entry.data as { localizedSlug?: string }).localizedSlug ?? key;
}
