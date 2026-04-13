import { commonTranslations } from './common';
import { homeTranslations } from './home';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
  },
} as const;
