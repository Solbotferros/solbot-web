export type SectorKey =
  | 'metalwork'
  | 'private_clients'
  | 'architecture_and_renovations'
  | 'industry'
  | 'hospitality_and_events'
  | 'agriculture';

export interface BusinessSector {
  key: SectorKey;
  featured?: boolean;
}

export interface SectorContent {
  readonly title: string;
  readonly description: string;
}

export const sectors: BusinessSector[] = [
  {
    key: 'metalwork',
    featured: true,
  },
  {
    key: 'private_clients',
    featured: true,
  },
  {
    key: 'architecture_and_renovations',
    featured: true,
  },
  {
    key: 'industry',
    featured: true,
  },
  {
    key: 'hospitality_and_events',
    featured: true,
  },
  {
    key: 'agriculture',
    featured: true,
  },
] as const;
