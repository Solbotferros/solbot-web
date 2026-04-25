import { buildRouteSegments, buildSegmentToKey } from './build';
import { hasRouteSegmentsCache, setRouteSegmentsCache } from './store';

let initPromise: Promise<void> | null = null;

export function initRouteSegments(): Promise<void> {
  if (hasRouteSegmentsCache()) {
    return Promise.resolve();
  }

  initPromise ??= actuallyInitRouteSegments();

  return initPromise;
}

async function actuallyInitRouteSegments() {
  const routeSegments = await buildRouteSegments();
  const segmentToKey = buildSegmentToKey(routeSegments);

  setRouteSegmentsCache(routeSegments, segmentToKey);
}
