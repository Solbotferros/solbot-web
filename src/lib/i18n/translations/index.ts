import { blogTranslations } from './blog';
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { whyUsTranslations } from './whyUs';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
    ...whyUsTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
    ...whyUsTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
    ...whyUsTranslations.en,
  },
} as const;
