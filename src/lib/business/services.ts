export type ServiceKey =
  | 'metal_structures'
  | 'metalwork'
  | 'grilles_and_railings'
  | 'gates_and_enclosures'
  | 'pergolas_and_outdoors'
  | 'welding_and_repairs';

export interface BusinessService {
  key: ServiceKey;
  slug: string;
  featured?: boolean;
}

export interface ServiceCardContent {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export const services: BusinessService[] = [
  {
    key: 'metal_structures',
    slug: 'estructuras-metalicas-barcelona',
    featured: true,
  },
  {
    key: 'metalwork',
    slug: 'carpinteria-metalica-barcelona',
    featured: true,
  },
  {
    key: 'grilles_and_railings',
    slug: 'rejas-y-barandillas-metalicas-barcelona',
    featured: true,
  },
  {
    key: 'gates_and_enclosures',
    slug: 'puertas-y-cerramientos-metalicos-barcelona',
    featured: true,
  },
  {
    key: 'pergolas_and_outdoors',
    slug: 'pergolas-y-estructuras-exteriores-metalicas-barcelona',
    featured: true,
  },
  {
    key: 'welding_and_repairs',
    slug: 'soldadura-y-reparaciones-metalicas-barcelona',
    featured: true,
  },
] as const;
