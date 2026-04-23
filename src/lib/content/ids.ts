import { type Language } from '@lib/i18n/types';

export function parseLocalizedEntryId(id: string) {
  const [key, lang] = id.split('/');

  return {
    key,
    lang: lang as Language,
  };
}
