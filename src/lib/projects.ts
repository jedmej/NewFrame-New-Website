export interface Project {
  name: string;
  image: string;
  category: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: 'UROKI TATTOO',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339eba3df4?w=800&q=80',
    category: 'WEB',
    url: 'https://urokitattoo.pl/',
  },
  {
    name: 'PANENKA CREATIVES',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    category: 'MOTION',
    url: 'https://panenka-creatives.pages.dev/',
  },
  {
    name: 'ESTHETIC',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    category: 'WEB',
    url: 'https://esthetic.pl/',
  },
  {
    name: 'ADFIDENCE',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    category: 'BRANDING',
    url: 'https://adfidence.com/',
  },
  {
    name: 'PHOTO STUDY',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    category: 'WEB',
    url: '#',
  },
];
