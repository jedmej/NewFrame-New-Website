import type { Lang } from '../i18n/translations';

export type WorkCardKey =
  | 'uroki'
  | 'hubert'
  | 'karmel'
  | 'panenka'
  | 'esthetic'
  | 'adfidence'
  | 'amvis'
  | 'atelierluma';

type WorkCardItem = {
  key: WorkCardKey;
  image: string;
  category: string;
  url: string;
  displayName: string;
};

/** Card order and image paths synced with Paper artboard 4FD-0. */
export const workSelectedCardItems: WorkCardItem[] = [
  {
    key: 'uroki',
    image: '/images/work/uroki.avif',
    category: 'WEB',
    url: 'https://urokitattoo.pl/',
    displayName: 'Uroki',
  },
  {
    key: 'hubert',
    image: '/images/work/hubert.avif',
    category: 'WEB',
    url: 'https://hubertkesik.com/',
    displayName: 'Hubert',
  },
  {
    key: 'karmel',
    image: '/images/work/karmel.avif',
    category: 'BRANDING',
    url: 'https://karmel-czekolada-portfolio.pages.dev/',
    displayName: 'Karmel',
  },
  {
    key: 'panenka',
    image: '/images/work/panenka.avif',
    category: 'MOTION',
    url: 'https://panenkacreatives.com/',
    displayName: 'Panenka',
  },
  {
    key: 'esthetic',
    image: '/images/work/esthetic.avif',
    category: 'WEB',
    url: 'https://esthetic.pl/',
    displayName: 'Esthetic',
  },
  {
    key: 'adfidence',
    image: '/images/work/adfidence.avif',
    category: 'BRANDING',
    url: 'https://adfidence.com/',
    displayName: 'Adfidence',
  },
  {
    key: 'amvis',
    image: '/images/work/amvis-card.avif',
    category: 'WEB',
    url: 'https://amvis.pages.dev/',
    displayName: 'Amvis',
  },
  {
    key: 'atelierluma',
    image: '/images/work/atelierluma.avif',
    category: 'WEB',
    url: 'https://interior-studio-exploration.pages.dev',
    displayName: 'Atelier Luma',
  },
];

export const categoryLabels = {
  WEB: 'Web',
  MOTION: 'Motion',
  BRANDING: 'Branding',
} as const satisfies Record<string, string>;

export function formatWorkCardCategory(category: string) {
  return categoryLabels[category as keyof typeof categoryLabels] ?? category;
}

export function padWorkCardIndex(index: number) {
  return String(index + 1).padStart(2, '0');
}

export function getWorkCardContactHref(lang: Lang) {
  return `/${lang}/#contact`;
}
