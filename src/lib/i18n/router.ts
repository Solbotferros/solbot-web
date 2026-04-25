import { initRouteSegments } from './generated-segments/init';
import { getRouteSegmentsSync, getSegmentToKeySync } from './generated-segments/store';
import { defaultLang } from './locales';

export async function ensureRouterReady() {
  await initRouteSegments();
}

export function getRouteSegments() {
  return getRouteSegmentsSync();
}

export function getSegmentToKey() {
  return getSegmentToKeySync();
}

export async function getRouteSegmentsAsync() {
  await ensureRouterReady();
  return getRouteSegmentsSync();
}

export async function getSegmentToKeyAsync() {
  await ensureRouterReady();
  return getSegmentToKeySync();
}

export { defaultLang };
