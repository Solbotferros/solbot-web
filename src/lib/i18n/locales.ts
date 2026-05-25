/** Configuración de idiomas soportados */

export const languages = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

export const localeRegions = {
  es: 'ES',
  ca: 'ES',
  en: 'GB',
} as const;

/** Rutas a las imágenes de banderas por idioma */
export const languageFlags = {
  es: '/images/flags/es.svg',
  ca: '/images/flags/ca.svg',
  en: '/images/flags/en.svg',
};

/** Array de códigos de idioma soportados */
export const locales = Object.keys(languages) as (keyof typeof languages)[];

/** Idioma por defecto de la aplicación */
export const defaultLang = 'es' as const;
