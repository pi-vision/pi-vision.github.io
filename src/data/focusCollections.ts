export const focusCollectionMap = {
  instruments: 'instruments',
  computation: 'computation',
  science: 'science',
} as const;

export type FocusSlug = keyof typeof focusCollectionMap;

export function getCollectionName(slug: string) {
  return focusCollectionMap[slug as FocusSlug];
}

export function focusHref(slug: string) {
  return `/focus/${slug}`;
}
