import type { Lang } from '../i18n/translations';

export type WorkCardKey =
  | 'uroki'
  | 'hubert'
  | 'karmel'
  | 'panenka'
  | 'esthetic'
  | 'adfidence'
  | 'amvis'
  | 'atelierluma'
  | 'visionspeech';

type WorkCardItem = {
  key: WorkCardKey;
  image: string;
  url: string;
  displayName: string;
};

/** Card order and image paths synced with Paper artboard 4FD-0. */
export const workSelectedCardItems: WorkCardItem[] = [
  {
    key: 'uroki',
    image: '/images/work/uroki.avif',
    url: 'https://urokitattoo.pl/',
    displayName: 'Uroki',
  },
  {
    key: 'hubert',
    image: '/images/work/hubert.avif',
    url: 'https://hubertkesik.com/',
    displayName: 'Hubert',
  },
  {
    key: 'karmel',
    image: '/images/work/karmel.avif',
    url: 'https://karmel-czekolada-portfolio.pages.dev/',
    displayName: 'Karmel',
  },
  {
    key: 'panenka',
    image: '/images/work/panenka.avif',
    url: 'https://panenkacreatives.com/',
    displayName: 'Panenka',
  },
  {
    key: 'esthetic',
    image: '/images/work/esthetic.avif',
    url: 'https://esthetic.pl/',
    displayName: 'Esthetic',
  },
  {
    key: 'adfidence',
    image: '/images/work/adfidence.avif',
    url: 'https://adfidence.com/',
    displayName: 'Adfidence',
  },
  {
    key: 'amvis',
    image: '/images/work/amvis-card.avif',
    url: 'https://amvis.pages.dev/',
    displayName: 'Amvis',
  },
  {
    key: 'atelierluma',
    image: '/images/work/atelierluma.avif',
    url: 'https://interior-studio-exploration.pages.dev',
    displayName: 'Atelier Luma',
  },
  {
    key: 'visionspeech',
    image: '/images/work/visionspeech.avif',
    url: 'https://www.visionspeech.app/',
    displayName: 'VisionSpeech',
  },
];

export function padWorkCardIndex(index: number) {
  return String(index + 1).padStart(2, '0');
}

export function getWorkCardContactHref(lang: Lang) {
  return `/${lang}/#contact`;
}
