// Common translations
import { commonTranslations } from './common';

// Home translations
import { homeTranslations } from './home';

// Blog translations
import { blogTranslations } from './blog';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
  },
} as const;
