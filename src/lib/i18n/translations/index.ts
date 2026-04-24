import { blogTranslations } from './blog';
import { commonTranslations } from './common';
import { homeTranslations } from './home';

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
