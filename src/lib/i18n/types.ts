/**
 * ============================================================================
 * MÓDULO: Tipos de Internacionalización
 * ============================================================================
 */

import type { languages } from './locales';
import type { translations } from './translations';
import { homeTranslations } from './translations/home';

export type HomeServicesSection = typeof homeTranslations.es.home.services;

export type Language = keyof typeof languages;

type LeafPaths<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object ? `${K}.${LeafPaths<T[K]>}` : K;
    }[keyof T & string]
  : never;

type AllPaths<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object ? K | `${K}.${AllPaths<T[K]>}` : K;
    }[keyof T & string]
  : never;

export type TranslationTree = typeof translations.es;

export type TranslationKeys = LeafPaths<TranslationTree>;
export type TranslationNodeKeys = AllPaths<TranslationTree>;

export type RouteSegments = Record<Language, Record<string, string>>;
