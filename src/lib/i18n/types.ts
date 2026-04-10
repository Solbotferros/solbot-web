/**
 * ============================================================================
 * MÓDULO: Tipos de Internacionalización
 * ============================================================================
 */

import type { languages } from './locales';

/** Tipo union de idiomas soportados: "es" | "en" */
export type Language = keyof typeof languages;

/**
 * Tipo recursivo que genera todas las claves válidas hasta las hojas (strings)
 * Ejemplo: "nav.home" | "nav.about" | "about.title"
 */
type Paths<T> = T extends object
  ? {
      [K in keyof T]-?: T[K] extends object
        ? `${K & string}.${Paths<T[K]> & string}`
        : `${K & string}`;
    }[keyof T]
  : never;

export type TranslationKeys = Paths<typeof import('./translations').translations.es>;

/** Mapeo tipado de segmentos de ruta por idioma */
export type RouteSegments = Record<Language, Record<string, string>>;
