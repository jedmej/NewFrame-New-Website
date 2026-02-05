export interface Project {
  slug: string;
  name: string;
  image: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tech: string[];
  description: {
    en: string;
    pl: string;
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'esthetic',
    name: 'ESTHETIC',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    category: 'WEB',
    year: '2024',
    client: 'Esthetic Clinic',
    role: 'Design & Development',
    tech: ['Astro', 'Three.js', 'GSAP'],
    description: {
      en: 'A premium web experience for a modern aesthetics clinic. Bold typography meets subtle animations to create a sense of luxury and trust.',
      pl: 'Ekskluzywne doświadczenie webowe dla nowoczesnej kliniki estetycznej. Odważna typografia spotyka subtelne animacje, tworząc poczucie luksusu i zaufania.',
    },
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    ],
  },
  {
    slug: 'adfidence',
    name: 'ADFIDENCE',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    category: 'BRANDING',
    year: '2024',
    client: 'Adfidence',
    role: 'Brand Identity & Web Design',
    tech: ['Figma', 'Framer', 'After Effects'],
    description: {
      en: 'Complete brand identity and web presence for an advertising confidence platform. Clean, geometric forms reflect precision and data-driven creativity.',
      pl: 'Kompletna identyfikacja marki i obecność w sieci dla platformy reklamowej. Czyste, geometryczne formy odzwierciedlają precyzję i kreatywność opartą na danych.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    ],
  },
  {
    slug: 'sll',
    name: 'SLL',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339eba3df4?w=800&q=80',
    category: 'WEB',
    year: '2023',
    client: 'SLL Architecture',
    role: 'Web Design & Development',
    tech: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    description: {
      en: 'A portfolio website for an architecture firm that lets the work speak for itself. Minimal interface, maximum visual impact.',
      pl: 'Strona portfolio dla biura architektonicznego, gdzie prace mówią same za siebie. Minimalny interfejs, maksymalny efekt wizualny.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339eba3df4?w=800&q=80',
    ],
  },
  {
    slug: 'project-4',
    name: 'PROJECT 4',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    category: 'MOTION',
    year: '2023',
    client: 'Motion Studio',
    role: 'Motion Design & Art Direction',
    tech: ['After Effects', 'Cinema 4D', 'Blender'],
    description: {
      en: 'Motion design and art direction for a creative studio. Dynamic visuals that capture attention and tell compelling stories.',
      pl: 'Motion design i kierownictwo artystyczne dla studia kreatywnego. Dynamiczne wizualizacje, które przyciągają uwagę i opowiadają fascynujące historie.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    ],
  },
  {
    slug: 'project-5',
    name: 'PROJECT 5',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    category: 'WEB',
    year: '2024',
    client: 'Tech Startup',
    role: 'Full Design & Development',
    tech: ['Astro', 'React', 'Tailwind CSS', 'Supabase'],
    description: {
      en: 'A full-stack web application for a tech startup. Modern stack, blazing performance, and an interface that users love.',
      pl: 'Pełna aplikacja webowa dla startupu technologicznego. Nowoczesny stack, błyskawiczna wydajność i interfejs, który użytkownicy kochają.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return ['ALL', ...new Set(projects.map((p) => p.category))];
}
