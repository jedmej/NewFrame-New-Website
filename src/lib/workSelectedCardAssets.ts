import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/translations';

import adfidence from '../assets/work/adfidence.avif';
import amvis from '../assets/work/amvis-card.avif';
import atelierluma from '../assets/work/atelierluma.avif';
import esthetic from '../assets/work/esthetic.avif';
import hubert from '../assets/work/hubert.avif';
import karmel from '../assets/work/karmel.avif';
import panenka from '../assets/work/panenka.avif';
import uroki from '../assets/work/uroki.avif';
import visionspeech from '../assets/work/visionspeech.avif';

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
  image: ImageMetadata;
  url: string;
  displayName: string;
};

/** Card order and image paths synced with Paper artboard 4FD-0. */
export const workSelectedCardItems: WorkCardItem[] = [
  {
    key: 'uroki',
    image: uroki,
    url: 'https://urokitattoo.pl/',
    displayName: 'Uroki',
  },
  {
    key: 'hubert',
    image: hubert,
    url: 'https://hubertkesik.com/',
    displayName: 'Hubert',
  },
  {
    key: 'karmel',
    image: karmel,
    url: 'https://karmel-czekolada-portfolio.pages.dev/',
    displayName: 'Karmel',
  },
  {
    key: 'panenka',
    image: panenka,
    url: 'https://panenkacreatives.com/',
    displayName: 'Panenka',
  },
  {
    key: 'esthetic',
    image: esthetic,
    url: 'https://esthetic.pl/',
    displayName: 'Esthetic',
  },
  {
    key: 'visionspeech',
    image: visionspeech,
    url: 'https://visionspeech.app/',
    displayName: 'VisionSpeech',
  },
  {
    key: 'adfidence',
    image: adfidence,
    url: 'https://adfidence.com/',
    displayName: 'Adfidence',
  },
  {
    key: 'amvis',
    image: amvis,
    url: 'https://amvis.pages.dev/',
    displayName: 'Amvis',
  },
  {
    key: 'atelierluma',
    image: atelierluma,
    url: 'https://interior-studio-exploration.pages.dev',
    displayName: 'Atelier Luma',
  },
];

export function padWorkCardIndex(index: number) {
  return String(index + 1).padStart(2, '0');
}

export function getWorkCardContactHref(lang: Lang) {
  return `/${lang}/#contact`;
}
