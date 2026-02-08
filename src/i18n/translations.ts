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
      services: 'Capabilities',
      contact: 'Contact',
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
      founder: 'JED MEJZNER',
      role: 'FOUNDER',
    },
    services: {
      label: 'CAPABILITIES',
      groups: [
        {
          category: 'Strategy',
          items: [
            { title: 'Digital Strategy' },
            { title: 'Content Strategy' },
            { title: 'User Experience' },
            { title: 'Copywriting' },
          ],
        },
        {
          category: 'Design',
          items: [
            { title: 'Art Direction' },
            { title: 'Web Design' },
            { title: 'Brand Identity' },
            { title: 'Design System' },
          ],
        },
        {
          category: 'Development',
          items: [
            { title: 'Web Development' },
            { title: 'E-commerce' },
            { title: 'Hosting' },
          ],
        },
      ],
      cta: 'Start a project',
      ctaRight: "Let's talk",
    },
    work: {
      label: 'SELECTED WORK',
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
    },
    footer: {
      cta: "Let's work together",
      navigation: 'Navigation',
      social: 'Social',
      info: 'Info',
      available: 'Available for projects',
      rights: 'All rights reserved',
      backToTop: 'Back to top',
    },
  },
  pl: {
    nav: {
      scope: 'Zakres',
      work: 'Projekty',
      services: 'Możliwości',
      contact: 'Kontakt',
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
      founder: 'JED MEJZNER',
      role: 'ZAŁOŻYCIEL',
    },
    services: {
      label: 'MOŻLIWOŚCI',
      groups: [
        {
          category: 'Strategia',
          items: [
            { title: 'Strategia cyfrowa' },
            { title: 'Strategia treści' },
            { title: 'User Experience' },
            { title: 'Copywriting' },
          ],
        },
        {
          category: 'Projektowanie',
          items: [
            { title: 'Art Direction' },
            { title: 'Web Design' },
            { title: 'Identyfikacja marki' },
            { title: 'Design System' },
          ],
        },
        {
          category: 'Development',
          items: [
            { title: 'Web Development' },
            { title: 'E-commerce' },
            { title: 'Hosting' },
          ],
        },
      ],
      cta: 'Rozpocznij projekt',
      ctaRight: 'Porozmawiajmy',
    },
    work: {
      label: 'WYBRANE PROJEKTY',
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
    },
    footer: {
      cta: 'Pracujmy razem',
      navigation: 'Nawigacja',
      social: 'Social',
      info: 'Info',
      available: 'Dostępny do projektów',
      rights: 'Wszelkie prawa zastrzeżone',
      backToTop: 'Powrót na górę',
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
