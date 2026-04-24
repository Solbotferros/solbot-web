import { generateCollectionRouteSegments } from '@lib/content/routing';
import { createLocaleRecord } from '../locale-record';
import { locales } from '../locales';
import { routeSegmentsByGroup } from '../manual-segments';
import type { Language, RouteSegments } from '../types';

const localizedCollections = ['legal', 'blog'] as const;

function getManualRouteSegments(): Record<Language, Record<string, string>> {
  const manual = createLocaleRecord<Record<string, string>>(() => ({}));

  for (const lang of locales) {
    manual[lang] = {
      ...routeSegmentsByGroup.common[lang],
    };
  }

  return manual;
}

async function getGeneratedRouteSegments(): Promise<Record<Language, Record<string, string>>> {
  const generatedParts = await Promise.all(
    localizedCollections.map((collection) => generateCollectionRouteSegments(collection)),
  );

  const merged = createLocaleRecord<Record<string, string>>(() => ({}));

  for (const part of generatedParts) {
    for (const lang of locales) {
      Object.assign(merged[lang], part[lang]);
    }
  }

  return merged;
}

export async function buildRouteSegments(): Promise<RouteSegments> {
  const manual = getManualRouteSegments();
  const generated = await getGeneratedRouteSegments();

  const final = createLocaleRecord<Record<string, string>>(() => ({})) as RouteSegments;

  for (const lang of locales) {
    final[lang] = {
      ...manual[lang],
      ...generated[lang],
    };
  }

  return final;
}

export function buildSegmentToKey(routeSegments: RouteSegments): Record<string, string> {
  return Object.entries(routeSegments).reduce(
    (acc, [, segments]) => {
      Object.entries(segments).forEach(([key, value]) => {
        acc[value] = key;
      });
      return acc;
    },
    {} as Record<string, string>,
  );
}
