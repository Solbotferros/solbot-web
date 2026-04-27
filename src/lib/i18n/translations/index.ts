import { blogTranslations } from './blog';
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { projectsTranslations } from './projects';
import { sectorsTranslations } from './sectors';
import { whyUsTranslations } from './whyUs';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
    ...whyUsTranslations.es,
    ...sectorsTranslations.es,
    ...projectsTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
    ...whyUsTranslations.ca,
    ...sectorsTranslations.ca,
    ...projectsTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
    ...whyUsTranslations.en,
    ...sectorsTranslations.en,
    ...projectsTranslations.en,
  },
} as const;
