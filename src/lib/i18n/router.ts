import type { RouteSegments } from './types';

/**
 * Configuración de enrutamiento multiidioma
 * - prefixDefaultLocale: incluye prefijo en URLs del idioma por defecto
 * - redirectToDefaultLocale: redirige sin prefijo al idioma por defecto
 */
export const routingConfig = {
  prefixDefaultLocale: true,
  redirectToDefaultLocale: true,
};

/**
 * Mapeo de segmentos de ruta por idioma
 * Solo traduce segmentos fijos, no parámetros dinámicos
 * Ejemplo: /es/servicios -> /en/services (dinamicos como IDs se mantienen igual)
 */
export const routeSegments: RouteSegments = {
  es: {
    // servicios: "servicios",
    // obra: "obra",
    legal: 'legal',
    // proyectos: "proyectos",
    privacidad: 'privacidad',
    // "aviso-legal": "aviso-legal",
  },
  ca: {
    // servicios: "servei",
    // obra: "obra",
    legal: 'legal',
    // proyectos: "projectes",
    privacidad: 'privacitat',
    // "aviso-legal": "avis-legal",
  },
  en: {
    // servicios: "services",
    // obra: "work",
    legal: 'legal',
    // proyectos: "projects",
    privacidad: 'privacy',
    // "aviso-legal": "legal-notice",
  },
};
/**
 * Mapeo inverso automático: de cualquier segmento traducido a su clave conceptual
 * Permite traducir en cualquier dirección sin conocer el idioma de origen
 *
 * Ej: "services" -> "servicios", "work" -> "obra", "servicios" -> "servicios"
 */
export const segmentToKey = Object.entries(routeSegments).reduce(
  (acc, [_, segments]) => {
    Object.entries(segments).forEach(([key, value]) => {
      acc[value] = key;
    });
    return acc;
  },
  {} as Record<string, string>,
);
