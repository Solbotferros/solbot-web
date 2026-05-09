import { formTranslations } from './form';
import { heroTranslations } from './hero';
import { infoTranslations } from './info';

export const contactTranslations = {
  es: {
    contact: {
      ...heroTranslations.es,
      ...infoTranslations.es,
      ...formTranslations.es,
    },
  },
  ca: {
    contact: {
      ...heroTranslations.ca,
      ...infoTranslations.ca,
      ...formTranslations.ca,
    },
  },
  en: {
    contact: {
      ...heroTranslations.en,
      ...infoTranslations.en,
      ...formTranslations.en,
    },
  },
} as const;
