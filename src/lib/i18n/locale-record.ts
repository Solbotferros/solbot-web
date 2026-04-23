import { locales } from './locales';
import type { Language } from './types';

export function createLocaleRecord<T>(factory: () => T): Record<Language, T> {
  return Object.fromEntries(locales.map((locale) => [locale, factory()])) as Record<Language, T>;
}
