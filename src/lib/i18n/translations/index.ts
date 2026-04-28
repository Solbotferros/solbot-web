// Common translations
import { commonTranslations } from './common';

// Home translations
import { homeTranslations } from './home';

// Blog translations
import { blogTranslations } from './blog';

// Projects translations
import { projectsTranslations } from './projects';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
    ...projectsTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
    ...projectsTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
    ...projectsTranslations.en,
  },
} as const;
