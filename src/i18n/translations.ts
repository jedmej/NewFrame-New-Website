const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    seo: {
      title: 'NEWFRAME — Custom Websites & Digital Direction',
      description: 'NEWFRAME is a small design studio creating custom websites and digital experiences for founders, premium services and growing businesses.',
      ogImageAlt: 'NEWFRAME - Custom Websites & Digital Direction',
    },
    nav: {
      scope: 'Scope',
      work: 'Work',
      services: 'Ways to Work',
      process: 'Process',
      contact: 'Contact',
      mobileMenuLabel: 'Site navigation',
    },
    skipToContent: 'Skip to content',
    hero: {
      title: 'NEW FRAME',
      available: 'AVAILABLE FOR PROJECTS',
      descriptor: 'DESIGN STUDIO',
      location: 'REMOTE',
      credit: 'JED MEJZNER \u00A926',
      statement: 'Websites for businesses whose online presence no longer matches the quality of their work.',
      subcopy: 'NEWFRAME is a small design studio creating sharp, custom websites and digital experiences for founders, premium services and growing businesses.',
      primaryCta: 'Send me your current site',
      secondaryCta: 'View work',
    },
    about: {
      label: 'ABOUT',
      manifesto: `I'm Jędrzej (Jed), the designer behind NEWFRAME. I help founders and growing businesses turn the quality of their work into a sharper digital presence — through creative direction, interface design and custom front-end development. The goal is not just to make a website look good. It is to make the first impression feel closer to the level of the business behind it.`,
      manifestoHighlights: ['NEWFRAME', 'quality', 'digital', 'presence'],
      body: `Based near Warsaw. Working locally and remotely with clients in Poland and abroad.`,
      founder: 'JED MEJZNER',
      role: 'FOUNDER',
    },
    waysToWork: {
      label: 'WAYS TO WORK',
      heading: 'Ways to work together',
      intro: 'Clear project shapes for businesses that need a sharper digital presence without a long agency process.',
      pricing: 'Most projects are scoped individually, with website work usually starting from 5,000 PLN.',
      items: [
        {
          title: 'Website Sprint',
          description: 'Custom marketing websites for businesses that need a sharper digital presence without a long agency process.',
          includes: ['Creative direction', 'Site structure', 'Interface design', 'Front-end development', 'Launch support'],
        },
        {
          title: 'Brand & Web Direction',
          description: 'For founders and businesses that need their website, visual direction and brand feel to finally work together.',
          includes: ['Visual direction', 'Design system foundations', 'Homepage and key page direction', 'Brand feel refinement'],
        },
        {
          title: 'Digital Systems',
          description: 'For projects that need more than a website — booking flows, forms, content systems or lightweight automations.',
          includes: ['Booking and reservation flows', 'Forms', 'Simple CMS', 'Integrations', 'Operational tools'],
        },
      ],
    },
    services: {
      label: 'OUTCOMES',
      groups: [
        {
          category: 'Shape the direction',
          description: 'Positioning, structure, UX and content direction — so the website has a clear point of view before it becomes a design.',
          items: [{ title: 'Positioning' }, { title: 'Structure' }, { title: 'UX direction' }, { title: 'Content direction' }],
        },
        {
          category: 'Design the experience',
          description: 'Art direction, interface design, visual systems and interaction — crafted to make the brand feel sharper and more memorable.',
          items: [{ title: 'Art direction' }, { title: 'Interface design' }, { title: 'Visual systems' }, { title: 'Interaction' }],
        },
        {
          category: 'Build and launch',
          description: 'Custom front-end development, responsive implementation, hosting setup and launch support.',
          items: [{ title: 'Front-end development' }, { title: 'Responsive implementation' }, { title: 'Hosting setup' }, { title: 'Launch support' }],
        },
        {
          category: 'Keep it running',
          description: 'Optional ongoing care for updates, small changes, monitoring and technical support.',
          items: [{ title: 'Updates' }, { title: 'Small changes' }, { title: 'Monitoring' }, { title: 'Technical support' }],
        },
      ],
      note: 'Content structured for people, search engines and modern AI assistants to understand.',
      cta: 'Start a project',
      ctaRight: "Let's talk",
    },
    process: {
      label: 'PROCESS',
      heading: 'How projects usually work',
      note: 'Projects begin after scope approval and an upfront payment.',
      steps: [
        { title: 'Send your current site or idea', description: 'You share what exists, what feels off and where you want the brand to go.' },
        { title: 'Direction', description: 'I define the structure, creative direction and scope.' },
        { title: 'Design', description: 'The key screens and visual system are designed around the first impression and user flow.' },
        { title: 'Build', description: 'The website is built as a custom, responsive front-end experience.' },
        { title: 'Launch', description: 'We review, polish and publish the site.' },
        { title: 'Care', description: 'If needed, NEWFRAME can stay involved for updates, changes and maintenance.' },
      ],
    },
    work: {
      label: 'SELECTED WORK',
      counter: 'of',
      carouselLabel: 'Interactive 3D carousel showcasing selected design projects',
      viewProject: 'View',
      previewProject: 'Preview',
      tooltipHint: 'Open project',
      projects: {
        hubert: {
          description: 'A focused personal website built around presence, clarity and a sharp first impression.',
          roles: ['Web design', 'Development'],
        },
        uroki: {
          description: 'A visual website for a tattoo studio with a strong identity and client experience.',
          roles: ['Creative direction', 'Web design', 'Development'],
        },
        panenka: {
          description: 'A digital presence for a creative studio built around personality, motion and visual confidence.',
          roles: ['Web design', 'Development', 'Interaction'],
        },
        esthetic: {
          description: 'A clean, premium web experience for a dental and aesthetic practice.',
          roles: ['Web design', 'Development', 'Visual direction'],
        },
        adfidence: {
          description: 'A sharper digital presence for a performance and marketing-focused business.',
          roles: ['Web design', 'Development', 'Interface system'],
        },
        amvis: {
          description: 'A new digital presence currently being shaped for launch.',
          roles: ['Coming soon'],
        },
      },
    },
    testimonials: {
      label: 'TESTIMONIALS',
      lead: 'The website sold them before they even walked in.',
      items: [
        {
          quote: "Jed took our vision and turned it into something we're genuinely proud to show people. The site feels like us, not some generic template with our logo slapped on. We've had clients tell us the website sold them before they even walked in.",
          highlights: ['genuinely', 'proud', 'sold'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          quote: 'Working with Jed was refreshingly straightforward. No fluff, no endless revisions. He understood what we needed and delivered something that actually elevated our brand. The site works harder for us than our old one ever did.',
          highlights: ['straightforward', 'elevated', 'harder'],
          name: 'Igor M.',
          role: 'FOUNDER, PANENKA CREATIVES',
        },
      ],
    },
    contact: {
      cta: "Let's Talk",
      prompt: "Send me your current website, idea or problem. I'll tell you if I can help.",
    },
    footer: {
      cta: "Let's work together",
      navigation: 'Navigation',
      info: 'Info',
      available: 'Available for projects',
      rights: 'All rights reserved',
      backToTop: 'Back to top',
      privacy: 'Privacy',
    },
    notFound: {
      title: 'Page not found',
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: 'Back to homepage',
    },
    privacy: {
      title: 'Privacy',
      heading: 'Privacy Policy',
      intro: 'We believe in complete transparency about data practices.',
      noCollection: 'We do not collect, store, or process any personal data. No cookies are set, no analytics are tracked, and no information is gathered about your visit.',
      thirdParty: 'This website loads fonts from Google Fonts and a visual effects library from jsDelivr CDN. These services may log standard server access data (such as IP addresses) per their own privacy policies.',
      contact: 'If you have any questions about this policy, you can reach us at',
      lastUpdated: 'Last updated: February 2026',
    },
  },
  pl: {
    seo: {
      title: 'NEWFRAME — indywidualne strony i kierunek cyfrowy',
      description: 'NEWFRAME to małe studio projektowe tworzące indywidualne strony i doświadczenia cyfrowe dla founderów, usług premium i rozwijających się firm.',
      ogImageAlt: 'NEWFRAME - indywidualne strony i kierunek cyfrowy',
    },
    nav: {
      scope: 'Zakres',
      work: 'Projekty',
      services: 'Współpraca',
      process: 'Proces',
      contact: 'Kontakt',
      mobileMenuLabel: 'Nawigacja strony',
    },
    skipToContent: 'Przejdź do treści',
    hero: {
      title: 'NEW FRAME',
      available: 'DOSTĘPNY DO PROJEKTÓW',
      descriptor: 'STUDIO PROJEKTOWE',
      location: 'ZDALNIE',
      credit: 'JED MEJZNER \u00A926',
      statement: 'Strony dla firm, których obecność online nie oddaje już jakości ich pracy.',
      subcopy: 'NEWFRAME to małe studio projektowe tworzące wyraziste, indywidualne strony i doświadczenia cyfrowe dla founderów, usług premium i rozwijających się firm.',
      primaryCta: 'Wyślij mi swoją obecną stronę',
      secondaryCta: 'Zobacz projekty',
    },
    about: {
      label: 'O MNIE',
      manifesto: `Jestem Jędrzej (Jed), projektant stojący za NEWFRAME. Pomagam founderom i rozwijającym się firmom przełożyć jakość ich pracy na ostrzejszą obecność cyfrową — przez kierunek kreatywny, projektowanie interfejsów i indywidualny front-end. Celem nie jest tylko ładna strona. Chodzi o pierwsze wrażenie, które jest bliżej poziomu biznesu stojącego za marką.`,
      manifestoHighlights: ['NEWFRAME', 'jakość', 'obecność', 'cyfrową'],
      body: `Działam pod Warszawą. Pracuję lokalnie i zdalnie z klientami w Polsce i za granicą.`,
      founder: 'JED MEJZNER',
      role: 'ZAŁOŻYCIEL',
    },
    waysToWork: {
      label: 'FORMY WSPÓŁPRACY',
      heading: 'Jak możemy pracować',
      intro: 'Konkretne formy współpracy dla firm, które potrzebują wyraźniejszej obecności online bez długiego agencyjnego procesu.',
      pricing: 'Większość projektów wyceniam indywidualnie, a prace nad stroną zwykle zaczynają się od 5 000 PLN.',
      items: [
        {
          title: 'Website Sprint',
          description: 'Indywidualne strony marketingowe dla firm, które potrzebują ostrzejszej obecności cyfrowej bez długiego agencyjnego procesu.',
          includes: ['Kierunek kreatywny', 'Struktura strony', 'Projekt interfejsu', 'Front-end development', 'Wsparcie przy publikacji'],
        },
        {
          title: 'Brand & Web Direction',
          description: 'Dla founderów i firm, które potrzebują, żeby strona, kierunek wizualny i charakter marki zaczęły działać razem.',
          includes: ['Kierunek wizualny', 'Podstawy design systemu', 'Kierunek strony głównej i kluczowych podstron', 'Dopracowanie charakteru marki'],
        },
        {
          title: 'Digital Systems',
          description: 'Dla projektów, które potrzebują czegoś więcej niż strona — rezerwacji, formularzy, systemu treści albo lekkich automatyzacji.',
          includes: ['Rezerwacje i zapisy', 'Formularze', 'Prosty CMS', 'Integracje', 'Narzędzia operacyjne'],
        },
      ],
    },
    services: {
      label: 'REZULTATY',
      groups: [
        {
          category: 'Ułożyć kierunek',
          description: 'Pozycjonowanie, struktura, UX i kierunek treści — żeby strona miała wyraźny punkt widzenia zanim stanie się projektem.',
          items: [{ title: 'Pozycjonowanie' }, { title: 'Struktura' }, { title: 'Kierunek UX' }, { title: 'Kierunek treści' }],
        },
        {
          category: 'Zaprojektować doświadczenie',
          description: 'Art direction, projekt interfejsu, system wizualny i interakcje — tak, żeby marka była ostrzejsza i bardziej zapamiętywalna.',
          items: [{ title: 'Art direction' }, { title: 'Projekt interfejsu' }, { title: 'System wizualny' }, { title: 'Interakcje' }],
        },
        {
          category: 'Zbudować i opublikować',
          description: 'Indywidualny front-end, responsywne wdrożenie, konfiguracja hostingu i wsparcie przy starcie.',
          items: [{ title: 'Front-end development' }, { title: 'Responsywne wdrożenie' }, { title: 'Konfiguracja hostingu' }, { title: 'Wsparcie przy publikacji' }],
        },
        {
          category: 'Utrzymać po starcie',
          description: 'Opcjonalna stała opieka nad aktualizacjami, małymi zmianami, monitoringiem i wsparciem technicznym.',
          items: [{ title: 'Aktualizacje' }, { title: 'Małe zmiany' }, { title: 'Monitoring' }, { title: 'Wsparcie techniczne' }],
        },
      ],
      note: 'Treści ułożone tak, żeby były zrozumiałe dla ludzi, wyszukiwarek i nowoczesnych asystentów AI.',
      cta: 'Rozpocznij projekt',
      ctaRight: 'Porozmawiajmy',
    },
    process: {
      label: 'PROCES',
      heading: 'Jak zwykle wygląda projekt',
      note: 'Projekt startuje po zatwierdzeniu zakresu i wpłacie zaliczki.',
      steps: [
        { title: 'Wysyłasz obecną stronę albo pomysł', description: 'Pokazujesz, co już istnieje, co nie działa i w którą stronę ma pójść marka.' },
        { title: 'Kierunek', description: 'Ustalam strukturę, kierunek kreatywny i zakres prac.' },
        { title: 'Projekt', description: 'Kluczowe ekrany i system wizualny powstają wokół pierwszego wrażenia i ścieżki użytkownika.' },
        { title: 'Budowa', description: 'Strona powstaje jako indywidualne, responsywne doświadczenie front-endowe.' },
        { title: 'Publikacja', description: 'Wspólnie sprawdzamy, dopracowujemy i publikujemy stronę.' },
        { title: 'Opieka', description: 'Jeśli trzeba, NEWFRAME może zostać przy projekcie na aktualizacje, zmiany i utrzymanie.' },
      ],
    },
    work: {
      label: 'WYBRANE PROJEKTY',
      counter: 'z',
      carouselLabel: 'Interaktywna karuzela 3D prezentująca wybrane projekty',
      viewProject: 'Zobacz',
      previewProject: 'Zapowiedź',
      tooltipHint: 'Otwórz projekt',
      projects: {
        hubert: {
          description: 'Skupiona strona osobista zbudowana wokół obecności, klarowności i mocnego pierwszego wrażenia.',
          roles: ['Web design', 'Development'],
        },
        uroki: {
          description: 'Wizualna strona dla studia tatuażu z mocnym charakterem i dopracowanym doświadczeniem klienta.',
          roles: ['Kierunek kreatywny', 'Web design', 'Development'],
        },
        panenka: {
          description: 'Obecność cyfrowa dla studia kreatywnego oparta na osobowości, ruchu i pewności wizualnej.',
          roles: ['Web design', 'Development', 'Interakcje'],
        },
        esthetic: {
          description: 'Czyste, premium doświadczenie webowe dla praktyki dentalnej i estetycznej.',
          roles: ['Web design', 'Development', 'Kierunek wizualny'],
        },
        adfidence: {
          description: 'Ostrzejsza obecność cyfrowa dla biznesu skupionego na performance i marketingu.',
          roles: ['Web design', 'Development', 'System interfejsu'],
        },
        amvis: {
          description: 'Nowa obecność cyfrowa przygotowywana do publikacji.',
          roles: ['W przygotowaniu'],
        },
      },
    },
    testimonials: {
      label: 'CO MÓWIĄ',
      lead: 'Strona przekonała ich, zanim jeszcze przyszli na miejsce.',
      items: [
        {
          quote: 'Jed wziął naszą wizję i zamienił ją w coś, czym naprawdę chcemy się chwalić. Strona wygląda jak my, nie jak kolejny szablon z naszym logo. Klienci mówią nam, że strona przekonała ich do nas zanim w ogóle do nas przyszli.',
          highlights: ['chwalić', 'przekonała'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          quote: 'Współpraca z Jedem była odświeżająco prosta. Bez lania wody, bez niekończących się poprawek. Zrozumiał czego potrzebujemy i dostarczył coś, co naprawdę podniosło naszą markę. Nowa strona pracuje dla nas lepiej niż stara kiedykolwiek to robiła.',
          highlights: ['prosta', 'podniosło', 'pracuje'],
          name: 'Igor M.',
          role: 'ZAŁOŻYCIEL, PANENKA CREATIVES',
        },
      ],
    },
    contact: {
      cta: 'Porozmawiajmy',
      prompt: 'Wyślij mi swoją obecną stronę, pomysł albo problem. Powiem Ci, czy mogę pomóc.',
    },
    footer: {
      cta: 'Pracujmy razem',
      navigation: 'Nawigacja',
      info: 'Info',
      available: 'Dostępny do projektów',
      rights: 'Wszelkie prawa zastrzeżone',
      backToTop: 'Powrót na górę',
      privacy: 'Prywatność',
    },
    notFound: {
      title: 'Nie znaleziono strony',
      description: 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
      backHome: 'Wróć na stronę główną',
    },
    privacy: {
      title: 'Prywatność',
      heading: 'Polityka prywatności',
      intro: 'Wierzymy w pełną przejrzystość w zakresie praktyk dotyczących danych.',
      noCollection: 'Nie zbieramy, nie przechowujemy ani nie przetwarzamy żadnych danych osobowych. Nie ustawiamy plików cookie, nie śledzimy analityki i nie zbieramy żadnych informacji o Twojej wizycie.',
      thirdParty: 'Ta strona ładuje czcionki z Google Fonts oraz bibliotekę efektów wizualnych z jsDelivr CDN. Te usługi mogą rejestrować standardowe dane dostępowe serwera (takie jak adresy IP) zgodnie z własnymi politykami prywatności.',
      contact: 'Jeśli masz pytania dotyczące tej polityki, możesz się z nami skontaktować pod adresem',
      lastUpdated: 'Ostatnia aktualizacja: luty 2026',
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
