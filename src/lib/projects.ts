interface Project {
  name: string;
  image: string;
  category: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: 'UROKI TATTOO',
    image: '/images/work/uroki.webp',
    category: 'WEB',
    url: 'https://urokitattoo.pl/',
  },
  {
    name: 'PANENKA CREATIVES',
    image: '/images/work/panenka.webp',
    category: 'MOTION',
    url: 'https://panenka-creatives.pages.dev/',
  },
  {
    name: 'ESTHETIC',
    image: '/images/work/esthetic.webp',
    category: 'WEB',
    url: 'https://esthetic.pl/',
  },
  {
    name: 'ADFIDENCE',
    image: '/images/work/adfidence.webp',
    category: 'BRANDING',
    url: 'https://adfidence.com/',
  },
  {
    name: 'PHOTO STUDY',
    image: '/images/work/photo.webp',
    category: 'WEB',
    url: '#',
  },
];
