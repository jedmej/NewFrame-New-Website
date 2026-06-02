import type { Lang } from '../i18n/translations';

export type WorkCardKey =
  | 'uroki'
  | 'hubert'
  | 'karmel'
  | 'panenka'
  | 'esthetic'
  | 'adfidence'
  | 'amvis';

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
    image: '/images/work/hubert.webp',
    category: 'WEB',
    url: 'https://hubertkesik.com/',
    displayName: 'Hubert',
  },
  {
    key: 'karmel',
    image: '/images/work/karmel.jpg',
    category: 'BRANDING',
    url: 'https://karmel-czekolada-portfolio.pages.dev/',
    displayName: 'Karmel',
  },
  {
    key: 'panenka',
    image: '/images/work/panenka.png',
    category: 'MOTION',
    url: 'https://panenkacreatives.com/',
    displayName: 'Panenka',
  },
  {
    key: 'esthetic',
    image: '/images/work/esthetic.png',
    category: 'WEB',
    url: 'https://esthetic.pl/',
    displayName: 'Esthetic',
  },
  {
    key: 'adfidence',
    image: '/images/work/adfidence.png',
    category: 'BRANDING',
    url: 'https://adfidence.com/',
    displayName: 'Adfidence',
  },
  {
    key: 'amvis',
    image: '/images/work/amvis-card.png',
    category: 'WEB',
    url: 'https://amvis.pages.dev/',
    displayName: 'Amvis',
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
