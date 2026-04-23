// src/lib/i18n/router.ts
import { defaultLang } from './locales';
import { initRouteSegments } from './segments/init';
import { getRouteSegmentsSync, getSegmentToKeySync } from './segments/store';

export async function ensureRouterReady() {
  await initRouteSegments();
}

export function getRouteSegments() {
  return getRouteSegmentsSync();
}

export function getSegmentToKey() {
  return getSegmentToKeySync();
}

export { defaultLang };
