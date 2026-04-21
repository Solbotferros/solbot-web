import { commonRouteSegments } from './common';
import { legalRouteSegments } from './legal';

export const routeSegmentsByGroup = {
  common: commonRouteSegments,
  legal: legalRouteSegments,
} as const;
