// Common translations
import { commonTranslations } from './common';

// Home translations
import { homeTranslations } from './home';

// Blog translations
import { blogTranslations } from './blog';

// Projects translations
import { projectsTranslations } from './projects';

// Services translations
import { servicesTranslations } from './services';

// Contact translations
import { contactTranslations } from './contact';

// Navigation translations
import { navigationTranslations } from './navigation';

export const translations = {
  es: {
    ...commonTranslations.es,
    ...homeTranslations.es,
    ...blogTranslations.es,
    ...projectsTranslations.es,
    ...servicesTranslations.es,
    ...contactTranslations.es,
    ...navigationTranslations.es,
  },
  ca: {
    ...commonTranslations.ca,
    ...homeTranslations.ca,
    ...blogTranslations.ca,
    ...projectsTranslations.ca,
    ...servicesTranslations.ca,
    ...contactTranslations.ca,
    ...navigationTranslations.ca,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...blogTranslations.en,
    ...projectsTranslations.en,
    ...servicesTranslations.en,
    ...contactTranslations.en,
    ...navigationTranslations.en,
  },
} as const;
