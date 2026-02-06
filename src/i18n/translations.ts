export const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    nav: {
      scope: 'Scope',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      available: 'Available',
    },
    hero: {
      title: 'NEW FRAME',
      available: 'AVAILABLE FOR PROJECTS',
      descriptor: 'DESIGN STUDIO',
      location: 'REMOTE / 2023',
      credit: 'JED MEJZNER \u00A925',
    },
    about: {
      label: 'ABOUT',
      manifesto: `Hey! I'm Jed, the founder of NEWFRAME — and I help businesses look as good as they perform. Working remotely with startups and small businesses worldwide, I design websites that aren't just beautiful — they're strategic, intentional, and built to convert. From brand identity to full web experiences, every pixel is placed with purpose. I don't do cookie-cutter. I do extraordinary.`,
      manifestoHighlights: ['NEWFRAME', 'beautiful', 'strategic', 'intentional', 'convert', 'extraordinary'],
      body: `I'm a designer who believes in craft over templates. Every project begins with understanding your business, your audience, and the story you want to tell. From there, I design brands and digital experiences that feel considered down to the last detail.`,
      links: [
        { label: 'About Me', href: '#scope' },
        { label: 'My Process', href: '#services' },
      ],
      founder: 'JED MEJZNER',
      role: 'FOUNDER',
    },
    services: {
      label: 'CAPABILITIES',
      items: [
        { num: '01', title: 'Web Design', desc: 'Custom websites that convert visitors into loyal customers.' },
        { num: '02', title: 'UX/UI Design', desc: 'User-first interfaces that feel intuitive and look stunning.' },
        { num: '03', title: 'Animation', desc: 'Motion that tells stories and guides the eye.' },
        { num: '04', title: 'Art Direction', desc: 'Cohesive visual strategy across every touchpoint.' },
        { num: '05', title: 'Brand Identity', desc: 'Logos, colors, and guidelines that make you unforgettable.' },
      ],
      cta: 'Start a project',
      ctaRight: "Let's talk",
    },
    work: {
      label: 'SELECTED WORK',
      viewProject: 'View Project',
      allFilter: 'All',
      counter: 'of',
    },
    testimonials: {
      label: 'WHAT THEY SAY',
      items: [
        {
          quote: 'Working with Jed was a game-changer. Our website went from outdated to outstanding. The attention to detail and creative vision exceeded all expectations.',
          highlights: ['game-changer', 'outstanding', 'exceeded'],
          name: 'Sarah K.',
          role: 'FOUNDER, STARTUP CO.',
          initials: 'SK',
        },
        {
          quote: 'Exceptional design work. Jed understood our brand perfectly and delivered a website that truly represents who we are. The results speak for themselves.',
          highlights: ['Exceptional', 'perfectly', 'results'],
          name: 'Michael R.',
          role: 'CEO, TECH VENTURES',
          initials: 'MR',
        },
        {
          quote: 'Jed transformed our online presence completely. Professional, creative, and incredibly easy to work with. Highly recommend for any business.',
          highlights: ['transformed', 'creative', 'recommend'],
          name: 'Amanda L.',
          role: 'DIRECTOR, CREATIVE AGENCY',
          initials: 'AL',
        },
      ],
    },
    contact: {
      cta: "Let's Talk",
      email: 'jed.mejzner@gmail.com',
      available: 'Available for projects',
    },
    footer: {
      cta: "Let's work together",
      navigation: 'Navigation',
      social: 'Social',
      info: 'Info',
      available: 'Available for projects',
      rights: 'All rights reserved',
      backToTop: 'Back to top',
      colophon: 'Built with Astro, Three.js, GSAP. Set in General Sans.',
    },
  },
  pl: {
    nav: {
      scope: 'Zakres',
      work: 'Projekty',
      about: 'O mnie',
      contact: 'Kontakt',
      available: 'Dostępny',
    },
    hero: {
      title: 'NEW FRAME',
      available: 'DOSTĘPNY DO PROJEKTÓW',
      descriptor: 'STUDIO PROJEKTOWE',
      location: 'ZDALNIE / 2023',
      credit: 'JED MEJZNER \u00A925',
    },
    about: {
      label: 'O MNIE',
      manifesto: `Cześć! Jestem Jed, założyciel NEWFRAME — pomagam firmom wyglądać tak dobrze, jak działają. Pracując zdalnie ze startupami i małymi firmami na całym świecie, projektuję strony, które nie są tylko piękne — są strategiczne, celowe i stworzone do konwersji. Od identyfikacji marki po pełne doświadczenia webowe, każdy piksel jest umieszczony z celem. Nie robię szablonów. Robię niezwykłe rzeczy.`,
      manifestoHighlights: ['NEWFRAME', 'piękne', 'strategiczne', 'celowe', 'konwersji', 'niezwykłe'],
      body: `Jestem projektantem, który wierzy w rzemiosło ponad szablony. Każdy projekt zaczyna się od zrozumienia Twojego biznesu, odbiorców i historii, którą chcesz opowiedzieć. Na tej podstawie projektuję marki i cyfrowe doświadczenia, które są przemyślane do ostatniego szczegółu.`,
      links: [
        { label: 'O Mnie', href: '#scope' },
        { label: 'Mój Proces', href: '#services' },
      ],
      founder: 'JED MEJZNER',
      role: 'ZAŁOŻYCIEL',
    },
    services: {
      label: 'MOŻLIWOŚCI',
      items: [
        { num: '01', title: 'Web Design', desc: 'Indywidualne strony, które zamieniają odwiedzających w lojalnych klientów.' },
        { num: '02', title: 'UX/UI Design', desc: 'Interfejsy zorientowane na użytkownika, intuicyjne i oszałamiające.' },
        { num: '03', title: 'Animacja', desc: 'Ruch, który opowiada historie i prowadzi wzrok.' },
        { num: '04', title: 'Art Direction', desc: 'Spójna strategia wizualna w każdym punkcie styku.' },
        { num: '05', title: 'Identyfikacja marki', desc: 'Loga, kolory i wytyczne, które czynią Cię niezapomnianym.' },
      ],
      cta: 'Rozpocznij projekt',
      ctaRight: 'Porozmawiajmy',
    },
    work: {
      label: 'WYBRANE PROJEKTY',
      viewProject: 'Zobacz projekt',
      allFilter: 'Wszystko',
      counter: 'z',
    },
    testimonials: {
      label: 'CO MÓWIĄ',
      items: [
        {
          quote: 'Współpraca z Jedem zmieniła zasady gry. Nasza strona przeszła z przestarzałej na wyjątkową. Dbałość o szczegóły i wizja twórcza przekroczyły wszelkie oczekiwania.',
          highlights: ['zmieniła', 'wyjątkową', 'przekroczyły'],
          name: 'Sarah K.',
          role: 'ZAŁOŻYCIELKA, STARTUP CO.',
          initials: 'SK',
        },
        {
          quote: 'Wyjątkowa praca projektowa. Jed doskonale zrozumiał naszą markę i dostarczył stronę, która naprawdę reprezentuje to, kim jesteśmy.',
          highlights: ['Wyjątkowa', 'doskonale', 'naprawdę'],
          name: 'Michael R.',
          role: 'CEO, TECH VENTURES',
          initials: 'MR',
        },
        {
          quote: 'Jed całkowicie odmienił naszą obecność w sieci. Profesjonalny, kreatywny i niesamowicie łatwy we współpracy. Gorąco polecam.',
          highlights: ['odmienił', 'kreatywny', 'polecam'],
          name: 'Amanda L.',
          role: 'DYREKTOR, AGENCJA KREATYWNA',
          initials: 'AL',
        },
      ],
    },
    contact: {
      cta: 'Porozmawiajmy',
      email: 'jed.mejzner@gmail.com',
      available: 'Dostępny do projektów',
    },
    footer: {
      cta: 'Pracujmy razem',
      navigation: 'Nawigacja',
      social: 'Social',
      info: 'Info',
      available: 'Dostępny do projektów',
      rights: 'Wszelkie prawa zastrzeżone',
      backToTop: 'Powrót na górę',
      colophon: 'Zbudowane z Astro, Three.js, GSAP. Czcionka General Sans.',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const [, , ...rest] = url.pathname.split('/');
  return `/${targetLang}/${rest.join('/')}`;
}
