import { blogTranslations } from './blog';
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { sectorsTranslations } from './sectors';
import { whyUsTranslations } from './whyUs';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
    ...whyUsTranslations.es,
    ...sectorsTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
    ...whyUsTranslations.ca,
    ...sectorsTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
    ...whyUsTranslations.en,
    ...sectorsTranslations.en,
  },
} as const;
