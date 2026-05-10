import { getEntrySlug } from '@lib/content/entries';
import type { Language } from '@lib/i18n/utils';
import { useTranslatedPath } from '@lib/i18n/utils';
import { getCollection } from 'astro:content';
import type { NavigationItem } from './types';

export async function buildNavigation(locale: Language): Promise<NavigationItem[]> {
  const trPath = useTranslatedPath(locale);

  const services = await getCollection('services', ({ id }) => id.endsWith(`/${locale}`));

  services.sort((a, b) => a.data.order - b.data.order);

  const serviceChildren = services.map((service) => ({
    key: service.data.localizedSlug ?? service.id,
    href: trPath(`/servicios/${getEntrySlug(service)}`),
  }));

  return [
    {
      key: 'home',
      href: trPath('/'),
    },
    {
      key: 'services',
      href: trPath('/servicios'),
      children: serviceChildren,
    },
    {
      key: 'projects',
      href: trPath('/proyectos'),
    },
    {
      key: 'blog',
      href: trPath('/blog'),
    },
    {
      key: 'contact',
      href: trPath('/contacto'),
    },
  ];
}
