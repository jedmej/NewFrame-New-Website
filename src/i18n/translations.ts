const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    seo: {
      title: 'NEWFRAME — Custom Websites & Digital Direction',
      description: 'NEWFRAME is a small design studio creating custom websites and digital experiences for founders, premium services and ambitious businesses.',
      ogImageAlt: 'NEWFRAME - Custom Websites & Digital Direction',
    },
    nav: {
      scope: 'About',
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
      subcopy: 'NEWFRAME is a small design studio creating sharp, custom websites and digital experiences for founders, premium services and ambitious businesses.',
      primaryCta: 'Send me your current site',
      secondaryCta: 'View work',
    },
    about: {
      label: 'ABOUT',
      manifesto: `I'm Jędrzej (Jed), the designer behind NEWFRAME. I help founders and ambitious businesses turn the quality of their work into a sharper digital presence — through creative direction, interface design and custom front-end development. The goal is not just to make a website look good. It is to make the first impression feel closer to the level of the business behind it.`,
      manifestoHighlights: ['NEWFRAME', 'quality', 'digital', 'presence'],
      body: `Based near Warsaw. Working locally and remotely with clients in Poland and abroad.`,
      founder: 'JED MEJZNER',
      role: 'FOUNDER',
    },
    waysToWork: {
      label: 'WAYS TO WORK',
      heading: 'Ways to work together',
      intro: 'Clear project shapes for businesses that need a sharper digital presence — from focused websites to lightweight digital systems.',
      pricing: 'Most website projects start from 5,000 PLN / around €1,200, depending on scope.',
      items: [
        {
          title: 'Website Sprint',
          description: 'A custom marketing website for businesses that need to look sharper, more credible and easier to understand online.',
          includes: ['Creative direction', 'Site structure', 'Interface design', 'Front-end development', 'Launch support'],
        },
        {
          title: 'Brand & Web Direction',
          description: 'Visual direction, structure and interface design for brands that need their website to feel more focused, premium and distinct.',
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
      label: 'PROCESS',
      heading: 'How the work takes shape',
      intro: 'Every project is shaped around a clear direction first — then designed, built and launched with enough structure to move fast without losing the craft.',
      groups: [
        {
          category: 'Direction',
          description: 'We define what the website needs to communicate, how it should feel and what structure will make the business easier to understand.',
          items: [{ title: 'Positioning' }, { title: 'Structure' }, { title: 'UX direction' }, { title: 'Content direction' }],
        },
        {
          category: 'Design',
          description: 'The key screens, visual system and interactions are designed around the first impression and the feeling the brand should leave behind.',
          items: [{ title: 'Art direction' }, { title: 'Interface design' }, { title: 'Visual system' }, { title: 'Motion' }],
        },
        {
          category: 'Build',
          description: 'The website is built as a custom, responsive front-end experience — fast, structured and ready to be launched.',
          items: [{ title: 'Custom front-end' }, { title: 'Responsive build' }, { title: 'Performance' }, { title: 'Search-ready structure' }],
        },
        {
          category: 'Launch & Care',
          description: 'After review and polish, the site goes live. If needed, NEWFRAME can stay involved for updates, small changes and technical care.',
          items: [{ title: 'Deployment' }, { title: 'Hosting' }, { title: 'Maintenance' }, { title: 'Updates' }],
        },
      ],
      note: 'Projects begin after scope approval and an upfront payment.',
      cta: 'Send me your current site',
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
      whyLabel: 'Why it worked',
      projects: {
        hubert: {
          description: 'A focused personal website built around presence, clarity and a sharp first impression.',
          why: 'The site gives the personal brand a cleaner, more confident first impression without feeling overproduced.',
          roles: ['Web design', 'Development'],
        },
        uroki: {
          description: 'A visual website for a tattoo studio with a strong identity and client experience.',
          why: 'The site helped the studio feel distinctive, atmospheric and far from a generic template.',
          roles: ['Creative direction', 'Web design', 'Development'],
        },
        panenka: {
          description: 'A digital presence for a creative studio built around personality, motion and visual confidence.',
          why: 'The experience makes the studio feel expressive and memorable before a client even reads the offer.',
          roles: ['Web design', 'Development', 'Interaction'],
        },
        esthetic: {
          description: 'A clean, premium web experience for a dental and aesthetic practice.',
          why: 'The interface creates trust quickly and keeps the service experience calm, polished and easy to understand.',
          roles: ['Web design', 'Development', 'Visual direction'],
        },
        adfidence: {
          description: 'A sharper digital presence for a performance and marketing-focused business.',
          why: 'The site frames the offer with more structure, clarity and credibility for higher-intent conversations.',
          roles: ['Web design', 'Development', 'Interface system'],
        },
        amvis: {
          description: 'An accounting office website redesign currently being shaped for launch.',
          why: 'The direction is being built to make a traditional service feel clearer, calmer and more current.',
          roles: ['In progress'],
        },
      },
    },
    testimonials: {
      label: 'TESTIMONIALS',
      lead: 'The website sold them before they even walked in.',
      items: [
        {
          lead: 'The website sold them before they even walked in.',
          quote: "Jed took our vision and turned it into something we're genuinely proud to show people. The site feels like us, not some generic template with our logo slapped on. We've had clients tell us the website sold them before they even walked in.",
          highlights: ['genuinely', 'proud', 'sold'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          lead: 'The new site works harder than the old one ever did.',
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
      email: 'Email',
      instagram: 'Instagram',
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
      description: 'NEWFRAME to małe studio projektowe tworzące indywidualne strony i doświadczenia cyfrowe dla founderów, usług premium i ambitnych firm.',
      ogImageAlt: 'NEWFRAME - indywidualne strony i kierunek cyfrowy',
    },
    nav: {
      scope: 'O mnie',
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
      subcopy: 'NEWFRAME to małe studio projektowe tworzące wyraziste, indywidualne strony i doświadczenia cyfrowe dla founderów, usług premium i ambitnych firm.',
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
      intro: 'Konkretne formy współpracy dla firm, które potrzebują wyraźniejszej obecności online — od skupionych stron po lekkie systemy cyfrowe.',
      pricing: 'Większość projektów wyceniam indywidualnie, a prace nad stroną zwykle zaczynają się od 5 000 PLN.',
      items: [
        {
          title: 'Website Sprint',
          description: 'Indywidualna strona marketingowa dla firm, które potrzebują wyglądać ostrzej, wiarygodniej i czytelniej online.',
          includes: ['Kierunek kreatywny', 'Struktura strony', 'Projekt interfejsu', 'Front-end development', 'Wsparcie przy publikacji'],
        },
        {
          title: 'Brand & Web Direction',
          description: 'Kierunek wizualny, struktura i projekt interfejsu dla marek, których strona ma być bardziej skupiona, premium i charakterystyczna.',
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
      label: 'PROCES',
      heading: 'Jak praca nabiera kształtu',
      intro: 'Każdy projekt najpierw układamy wokół jasnego kierunku — potem projektujemy, budujemy i publikujemy go z wystarczającą strukturą, żeby działać szybko bez gubienia jakości.',
      groups: [
        {
          category: 'Kierunek',
          description: 'Ustalamy, co strona ma komunikować, jak ma się czuć i jaka struktura pomoże lepiej zrozumieć biznes.',
          items: [{ title: 'Pozycjonowanie' }, { title: 'Struktura' }, { title: 'Kierunek UX' }, { title: 'Kierunek treści' }],
        },
        {
          category: 'Projekt',
          description: 'Kluczowe ekrany, system wizualny i interakcje powstają wokół pierwszego wrażenia i tego, co marka ma po sobie zostawić.',
          items: [{ title: 'Art direction' }, { title: 'Projekt interfejsu' }, { title: 'System wizualny' }, { title: 'Motion' }],
        },
        {
          category: 'Budowa',
          description: 'Strona powstaje jako indywidualne, responsywne doświadczenie front-endowe — szybkie, uporządkowane i gotowe do publikacji.',
          items: [{ title: 'Indywidualny front-end' }, { title: 'Responsywne wdrożenie' }, { title: 'Performance' }, { title: 'Struktura pod wyszukiwanie' }],
        },
        {
          category: 'Publikacja i opieka',
          description: 'Po wspólnym sprawdzeniu i dopracowaniu strona trafia online. Jeśli trzeba, NEWFRAME może zostać przy aktualizacjach, zmianach i opiece technicznej.',
          items: [{ title: 'Publikacja' }, { title: 'Hosting' }, { title: 'Utrzymanie' }, { title: 'Aktualizacje' }],
        },
      ],
      note: 'Projekt startuje po zatwierdzeniu zakresu i wpłacie zaliczki.',
      cta: 'Wyślij mi obecną stronę',
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
      whyLabel: 'Dlaczego zadziałało',
      projects: {
        hubert: {
          description: 'Skupiona strona osobista zbudowana wokół obecności, klarowności i mocnego pierwszego wrażenia.',
          why: 'Strona daje marce osobistej czystsze, pewniejsze pierwsze wrażenie bez wrażenia przesadzonej produkcji.',
          roles: ['Web design', 'Development'],
        },
        uroki: {
          description: 'Wizualna strona dla studia tatuażu z mocnym charakterem i dopracowanym doświadczeniem klienta.',
          why: 'Strona pomogła studiu wyglądać charakterystycznie, atmosferycznie i daleko od generycznego szablonu.',
          roles: ['Kierunek kreatywny', 'Web design', 'Development'],
        },
        panenka: {
          description: 'Obecność cyfrowa dla studia kreatywnego oparta na osobowości, ruchu i pewności wizualnej.',
          why: 'Doświadczenie pokazuje ekspresyjny charakter studia zanim klient przejdzie do szczegółów oferty.',
          roles: ['Web design', 'Development', 'Interakcje'],
        },
        esthetic: {
          description: 'Czyste, premium doświadczenie webowe dla praktyki dentalnej i estetycznej.',
          why: 'Interfejs szybko buduje zaufanie i prowadzi przez ofertę w spokojny, dopracowany sposób.',
          roles: ['Web design', 'Development', 'Kierunek wizualny'],
        },
        adfidence: {
          description: 'Ostrzejsza obecność cyfrowa dla biznesu skupionego na performance i marketingu.',
          why: 'Strona porządkuje ofertę i wzmacnia wiarygodność w rozmowach z bardziej zdecydowanymi klientami.',
          roles: ['Web design', 'Development', 'System interfejsu'],
        },
        amvis: {
          description: 'Redesign strony biura rachunkowego przygotowywany do publikacji.',
          why: 'Kierunek ma pomóc tradycyjnej usłudze wyglądać czytelniej, spokojniej i bardziej współcześnie.',
          roles: ['W toku'],
        },
      },
    },
    testimonials: {
      label: 'CO MÓWIĄ',
      lead: 'Strona przekonała ich, zanim jeszcze przyszli na miejsce.',
      items: [
        {
          lead: 'Strona przekonała ich, zanim jeszcze przyszli na miejsce.',
          quote: 'Jed wziął naszą wizję i zamienił ją w coś, czym naprawdę chcemy się chwalić. Strona wygląda jak my, nie jak kolejny szablon z naszym logo. Klienci mówią nam, że strona przekonała ich do nas zanim w ogóle do nas przyszli.',
          highlights: ['chwalić', 'przekonała'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          lead: 'Nowa strona pracuje lepiej niż stara kiedykolwiek.',
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
      email: 'Email',
      instagram: 'Instagram',
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
