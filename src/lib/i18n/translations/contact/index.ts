import { heroTranslations } from './hero';
import { infoTranslations } from './info';

export const contactTranslations = {
  es: {
    contact: {
      ...heroTranslations.es,
      ...infoTranslations.es,
    },
  },
  ca: {
    contact: {
      ...heroTranslations.ca,
      ...infoTranslations.ca,
    },
  },
  en: {
    contact: {
      ...heroTranslations.en,
      ...infoTranslations.en,
    },
  },
} as const;
