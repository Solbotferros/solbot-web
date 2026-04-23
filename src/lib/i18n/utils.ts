/**
 * Utilidades de internacionalización para traducciones y rutas
 */

import { defaultLang } from './locales';
import { getRouteSegments, getSegmentToKey } from './router';
import { routingConfig } from './routing-config';
import { translations } from './translations/translations';
import type { TranslationKeys, TranslationNodeKeys } from './types';
import { type Language } from './types';

const { prefixDefaultLocale } = routingConfig;

export type { Language };

/**
 * Accede a valores anidados en un objeto usando notación de puntos
 * Ejemplo: getNestedValue({ nav: { home: 'Inicio' } }, 'nav.home') -> 'Inicio'
 */
function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * Hook para obtener traducciones tipadas en un idioma específico
 * Proporciona autocompletado y fallback al idioma por defecto
 *
 * Uso: const t = useTranslations('es'); t('nav.home')
 */
export function useTranslations(lang: keyof typeof translations) {
  function t(key: TranslationKeys): string {
    const value =
      getNestedValue(translations[lang], key) ?? getNestedValue(translations[defaultLang], key);

    return typeof value === 'string' ? value : key;
  }

  function tn<T = unknown>(key: TranslationNodeKeys): T {
    return (getNestedValue(translations[lang], key) ??
      getNestedValue(translations[defaultLang], key)) as T;
  }

  return { t, tn };
}

/**
 * Extrae idioma y resto de la ruta de un pathname
 * Ejemplo: stripLangPrefix('/es/servicios') -> { lang: 'es', rest: '/servicios' }
 */
function stripLangPrefix(pathname: string): { lang?: string; rest: string } {
  const routeSegments = getRouteSegments();
  const parts = pathname.split('/').filter(Boolean);
  const maybeLang = parts[0];
  if (maybeLang && maybeLang in routeSegments) {
    return { lang: maybeLang, rest: '/' + parts.slice(1).join('/') };
  }
  return { rest: pathname };
}

/**
 * Traduce una ruta a otro idioma, traduciendo cada segmento
 * Preserva trailing slashes, query strings y fragmentos
 * Funciona de cualquier idioma a cualquier idioma gracias al mapeo inverso
 * Ejemplo: translatePathname('/es/servicios/3', 'en') -> '/en/services/3'
 * Ejemplo: translatePathname('/en/services/3', 'es') -> '/es/servicios/3'
 * Ejemplo: translatePathname('/es/servicios/', 'en') -> '/en/services/'
 * Ejemplo: translatePathname('/es/servicios?id=1#section', 'en') -> '/en/services?id=1#section'
 */
export function translatePathname(pathname: string, to: Language): string {
  const routeSegments = getRouteSegments();
  const segmentToKey = getSegmentToKey();

  // Separar y preservar fragment y query string
  let [pathAndQuery, ...hashParts] = pathname.split('#');
  const hashFragment = hashParts.length > 0 ? '#' + hashParts.join('#') : '';

  const [pathOnly, ...queryParts] = pathAndQuery.split('?');
  const queryString = queryParts.length > 0 ? '?' + queryParts.join('?') : '';

  // Preservar trailing slash (pero no para `/`)
  const hasTrailingSlash = pathOnly.length > 1 && pathOnly.endsWith('/');
  const cleanPath = hasTrailingSlash ? pathOnly.slice(0, -1) : pathOnly;

  // Extraer y traducir segmentos
  const { rest } = stripLangPrefix(cleanPath);
  const segments = rest.split('/').filter(Boolean);

  // Construir ruta traducida
  let translatedPath: string;
  if (segments.length === 0) {
    translatedPath = '/';
  } else {
    // Usar segmentToKey para obtener la clave conceptual y traducir
    const translated = segments.map((seg) => {
      const key = segmentToKey[seg]; // Obtener clave conceptual (ej: "services" -> "servicios")
      return key ? routeSegments[to][key] : seg; // Traducir al idioma destino, o mantener si no es traducible
    });
    translatedPath = '/' + translated.join('/');
  }

  // Añadir trailing slash si lo había en el original
  if (hasTrailingSlash && translatedPath !== '/') {
    translatedPath += '/';
  }

  // Aplicar prefijo de idioma según configuración
  let finalPath: string;
  if (!prefixDefaultLocale && to === defaultLang) {
    finalPath = translatedPath;
  } else {
    // Si es la home (/) añadir trailing slash después del prefijo
    if (translatedPath === '/') {
      finalPath = `/${to}/`;
    } else {
      finalPath = `/${to}${translatedPath}`;
    }
  }

  return finalPath + queryString + hashFragment;
}

/**
 * Hook para traducir rutas a un idioma específico
 * Uso: const toEnglish = useTranslatedPath('en'); toEnglish('/es/servicios')
 */
export function useTranslatedPath(lang: Language) {
  return (path: string) => translatePathname(path, lang);
}
