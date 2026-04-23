import { buildRouteSegments, buildSegmentToKey } from './build';
import { hasRouteSegmentsCache, setRouteSegmentsCache } from './store';

export async function initRouteSegments() {
  if (hasRouteSegmentsCache()) return;

  const routeSegments = await buildRouteSegments();
  const segmentToKey = buildSegmentToKey(routeSegments);

  setRouteSegmentsCache(routeSegments, segmentToKey);
}
