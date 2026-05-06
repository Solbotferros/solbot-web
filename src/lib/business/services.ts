import MetalworkImage from '@assets/services/carpinteria-metalica.webp';
import MetalStructuresImage from '@assets/services/estructuras-metalicas.webp';
import MetalFurnitureImage from '@assets/services/mobiliario-metalico.webp';
import WeldingImage from '@assets/services/soldadura.webp';

export type ServiceKey = 'welding' | 'metal_structures' | 'metalwork' | 'metal_furniture';

export interface BusinessService {
  key: ServiceKey;
  slug: string;
  featured?: boolean;
  image: ImageMetadata;
}

export interface ServiceCardContent {
  readonly title: string;
  readonly description: string;
}

export const services: BusinessService[] = [
  {
    key: 'welding',
    slug: 'soldadura-barcelona',
    featured: true,
    image: WeldingImage,
  },
  {
    key: 'metal_structures',
    slug: 'estructuras-metalicas-barcelona',
    featured: true,
    image: MetalStructuresImage,
  },
  {
    key: 'metalwork',
    slug: 'carpinteria-metalica-barcelona',
    featured: true,
    image: MetalworkImage,
  },
  {
    key: 'metal_furniture',
    slug: 'mobiliario-metalico-barcelona',
    featured: true,
    image: MetalFurnitureImage,
  },
] as const;
