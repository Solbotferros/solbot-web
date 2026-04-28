export function parseCollectionId(id: string) {
  const [lang, ...rest] = id.split('/');

  return {
    lang,
    localizedId: id,
    unlocalizedId: rest.join('/'),
    slug: rest.at(-1) ?? '',
  };
}
