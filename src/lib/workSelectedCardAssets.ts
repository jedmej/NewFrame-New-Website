import type { Lang } from '../i18n/translations';
import { projects as allProjects } from './projects';

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

const projectKeyByUrl = {
  'https://urokitattoo.pl/': 'uroki',
  'https://panenkacreatives.com/': 'panenka',
  'https://esthetic.pl/': 'esthetic',
  'https://adfidence.com/': 'adfidence',
} as const satisfies Record<string, WorkCardKey>;

const projectByKey = Object.fromEntries(
  allProjects.map((project) => {
    const key = projectKeyByUrl[project.url as keyof typeof projectKeyByUrl];
    return [key, project];
  }),
) as Record<
  Exclude<WorkCardKey, 'hubert' | 'karmel' | 'amvis'>,
  (typeof allProjects)[number]
>;

/** Card order and image paths synced with Paper artboard 4FD-0. */
export const workSelectedCardItems: WorkCardItem[] = [
  {
    key: 'uroki',
    image: '/images/work/uroki.avif',
    category: projectByKey.uroki.category,
    url: projectByKey.uroki.url,
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
    category: projectByKey.panenka.category,
    url: projectByKey.panenka.url,
    displayName: 'Panenka',
  },
  {
    key: 'esthetic',
    image: '/images/work/esthetic.png',
    category: projectByKey.esthetic.category,
    url: projectByKey.esthetic.url,
    displayName: 'Esthetic',
  },
  {
    key: 'adfidence',
    image: '/images/work/adfidence.png',
    category: projectByKey.adfidence.category,
    url: projectByKey.adfidence.url,
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
  'IN PROGRESS': 'In progress',
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
