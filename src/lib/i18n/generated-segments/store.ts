import type { RouteSegments } from '../types';

let routeSegmentsCache: RouteSegments | null = null;
let segmentToKeyCache: Record<string, string> | null = null;

export function setRouteSegmentsCache(
  routeSegments: RouteSegments,
  segmentToKey: Record<string, string>,
) {
  routeSegmentsCache = routeSegments;
  segmentToKeyCache = segmentToKey;
}

export function getRouteSegmentsSync(): RouteSegments {
  if (!routeSegmentsCache) {
    throw new Error('Route segments cache not initialized');
  }
  return routeSegmentsCache;
}

export function getSegmentToKeySync(): Record<string, string> {
  if (!segmentToKeyCache) {
    throw new Error('segmentToKey cache not initialized');
  }
  return segmentToKeyCache;
}

export function hasRouteSegmentsCache(): boolean {
  return routeSegmentsCache !== null && segmentToKeyCache !== null;
}
