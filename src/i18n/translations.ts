const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    seo: {
      title: 'NEWFRAME, Custom Websites and Digital Direction',
      description: 'NEWFRAME is an independent design studio creating custom websites and digital experiences for founders, premium services and companies that want to look as good as they work.',
      ogImageAlt: 'NEWFRAME, Custom Websites and Digital Direction',
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
      title: 'NEWFRAME',
      available: 'AVAILABLE FOR PROJECTS',
      descriptor: 'DIGITAL STUDIO',
      location: 'REMOTE',
      credit: 'BRAND / WEB / PRODUCT',
      statement: 'Great work deserves the right frame.',
      subcopy: 'NEWFRAME is an independent studio designing distinctive websites, visual systems and product experiences for founders and growing companies.',
      primaryCta: 'Send your current site',
      secondaryCta: 'View work',
    },
    about: {
      label: 'ABOUT',
      manifesto: `NEWFRAME is an independent studio creating distinctive websites and visual systems for founders and growing companies. We work with brands that understand how much first impressions shape trust, pricing and growth.`,
      manifestoHighlights: ['NEWFRAME', 'digital', 'studio', 'first impressions'],
      body: `Founded and led by Jędrzej “Jed” Mejzner. Based near Warsaw, working with clients in Poland and abroad.`,
      founder: 'JED MEJZNER',
      role: 'FOUNDER',
      imageAlt: 'Portrait of Jed Mejzner',
    },
    waysToWork: {
      label: 'WAYS TO WORK',
      heading: 'What we can build for you',
      intro: 'Clear ways to work together for companies that need a stronger digital presence, from focused websites to digital systems.',
      pricing: 'Most projects are scoped individually. Website projects usually start from 5,000 PLN, depending on scope.',
      items: [
        {
          title: 'Websites & Landing Pages',
          description: 'A custom website for a business that wants to look sharper, more credible and easier to understand online.',
          includes: ['Offer architecture', 'Conversion sections', 'Interface design', 'Frontend development', 'Mobile performance', 'Launch setup'],
        },
        {
          title: 'Brand & Design Direction',
          description: 'We shape the visual direction, structure and website language so the brand feels more focused, premium and distinct.',
          includes: ['Visual audit', 'Reference boards', 'Art direction', 'Homepage concept', 'Design system basics', 'Motion and interaction style'],
        },
        {
          title: 'Full Digital Systems',
          description: 'For projects where a website alone is not enough: booking flows, forms, content systems or simple automations.',
          includes: ['User flows', 'Booking or intake flows', 'Lead capture forms', 'CMS content model', 'Integrations', 'Operational handoff'],
        },
      ],
    },
    services: {
      label: 'PROCESS',
      heading: 'How the work comes together',
      intro: 'We start by shaping the direction, then design, build and launch with enough structure to move quickly without losing the craft.',
      groups: [
        {
          category: 'Direction',
          description: 'We define what the site needs to say, how it should feel and which structure will make the offer easiest to understand.',
          items: [{ title: 'Positioning' }, { title: 'Structure' }, { title: 'UX direction' }, { title: 'Content direction' }],
        },
        {
          category: 'Design',
          description: 'We design the key screens, visual system and interactions around a first impression that feels clear, confident and memorable.',
          items: [{ title: 'Art direction' }, { title: 'Interface design' }, { title: 'Visual system' }, { title: 'Motion' }],
        },
        {
          category: 'Build',
          description: 'We build the site as a custom responsive frontend, fast, structured and ready to launch.',
          items: [{ title: 'Custom frontend' }, { title: 'Responsive build' }, { title: 'Performance' }, { title: 'Search-ready structure' }],
        },
        {
          category: 'Launch & Care',
          description: 'After review and polish, the site goes live. If needed, we stay involved for updates, changes and technical care.',
          items: [{ title: 'Deployment' }, { title: 'Hosting' }, { title: 'Maintenance' }, { title: 'Updates' }],
        },
      ],
      note: 'Projects begin after scope approval and an upfront payment.',
    },
    work: {
      label: 'SELECTED WORK',
      carouselLabel: 'Interactive showcase of selected projects',
      viewProject: 'Visit',
      previewProject: 'Preview',
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
          description: 'A website for a creative studio that brings personality, motion and visual confidence to the front.',
          roles: ['Web design', 'Development', 'Interaction'],
        },
        esthetic: {
          description: 'A calm, elegant website for a dental and aesthetic practice.',
          roles: ['Web design', 'Development', 'Visual direction'],
        },
        adfidence: {
          description: 'A sharper digital presence for a performance and marketing-focused business.',
          roles: ['Web design', 'Development', 'Interface system'],
        },
        amvis: {
          description: 'A website redesign for an accounting office, currently being prepared for launch.',
          roles: ['In progress'],
        },
      },
    },
    testimonials: {
      label: 'TESTIMONIALS',
      lead: 'The website gave them confidence before they even walked in.',
      items: [
        {
          lead: 'The website gave them confidence before they even walked in.',
          quote: 'NEWFRAME turned our vision into a website we are genuinely proud to show people. It feels like us, not a template with our logo dropped in. Clients told us the site gave them confidence before they even walked in.',
          highlights: ['genuinely', 'proud', 'confidence'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          lead: 'The new site does more for us than the old one ever did.',
          quote: 'Working with NEWFRAME was refreshingly straightforward. No fluff and no dragging the process out. Jed quickly understood what we needed and delivered a site that genuinely raised the level of our brand. The new site does more for us than the old one ever did.',
          highlights: ['straightforward', 'raised', 'more'],
          name: 'Igor M.',
          role: 'FOUNDER, PANENKA CREATIVES',
        },
      ],
    },
    contact: {
      cta: "Let's talk",
      prompt: 'Send your current site, idea or problem. We will reply with a clear next step.',
    },
    footer: {
      cta: "Let's build something together",
      navigation: 'Navigation',
      info: 'Info',
      available: 'Available for projects',
      rights: 'All rights reserved',
      backToTop: 'Back to top',
      privacy: 'Privacy',
      email: 'Email',
    },
    notFound: {
      title: 'Page not found',
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: 'Back to homepage',
    },
    privacy: {
      title: 'Privacy',
      heading: 'Privacy',
      intro: 'Simple and clear: we only use what is needed for the site to work.',
      noCollection: 'We do not run analytics, set our own cookies or build visitor profiles.',
      thirdParty: 'This site may load fonts from Google Fonts and visual effect libraries from jsDelivr. These services may process standard technical data, such as IP address, under their own privacy policies.',
      contact: 'If you have any privacy questions, email us at',
      lastUpdated: 'Last updated: February 2026',
    },
  },
  pl: {
    seo: {
      title: 'NEWFRAME, indywidualne strony i kierunek cyfrowy',
      description: 'NEWFRAME to niezależne studio projektowe. Tworzymy indywidualne strony i doświadczenia cyfrowe dla założycieli, usług premium i firm, które chcą wyglądać tak dobrze, jak działają.',
      ogImageAlt: 'NEWFRAME, indywidualne strony i kierunek cyfrowy',
    },
    nav: {
      scope: 'Studio',
      work: 'Projekty',
      services: 'Współpraca',
      process: 'Proces',
      contact: 'Kontakt',
      mobileMenuLabel: 'Nawigacja strony',
    },
    skipToContent: 'Przejdź do treści',
    hero: {
      title: 'NEWFRAME',
      available: 'DOSTĘPNY DO PROJEKTÓW',
      descriptor: 'DIGITAL STUDIO',
      location: 'ZDALNIE',
      credit: 'BRAND / WEB / PRODUCT',
      statement: 'Dobra marka zasługuje na dobrą oprawę.',
      subcopy: 'NEWFRAME to niezależne studio. Projektujemy wyraziste strony, systemy wizualne i doświadczenia produktowe dla założycieli oraz rozwijających się firm.',
      primaryCta: 'Wyślij obecną stronę',
      secondaryCta: 'Zobacz projekty',
    },
    about: {
      label: 'O STUDIO',
      manifesto: `NEWFRAME to niezależne studio tworzące wyraziste strony i systemy wizualne dla założycieli oraz rozwijających się firm. Pracujemy z markami, które rozumieją, że pierwsze wrażenie wpływa na zaufanie, stawki i tempo wzrostu.`,
      manifestoHighlights: ['NEWFRAME', 'studio', 'cyfrowe', 'pierwsze wrażenie'],
      body: `Studio założone i prowadzone przez Jędrzeja “Jeda” Mejznera. Działamy z okolic Warszawy, współpracując z klientami w Polsce i za granicą.`,
      founder: 'JED MEJZNER',
      role: 'ZAŁOŻYCIEL',
      imageAlt: 'Portret Jeda Mejznera',
    },
    waysToWork: {
      label: 'FORMY WSPÓŁPRACY',
      heading: 'Co możemy dla Ciebie zrobić',
      intro: 'Konkretne formy współpracy dla firm, które chcą mocniejszej obecności online, od skupionych stron po systemy cyfrowe.',
      pricing: 'Większość projektów wyceniamy indywidualnie. Strony najczęściej startują od 5 000 PLN, zależnie od zakresu.',
      items: [
        {
          title: 'Strony i landing pages',
          description: 'Indywidualna strona dla firmy, która chce wyglądać nowocześniej, bardziej wiarygodnie i łatwiej opowiadać o swojej ofercie.',
          includes: ['Architektura oferty', 'Sekcje sprzedażowe', 'Projekt interfejsu', 'Wdrożenie frontendowe', 'Mobile i performance', 'Konfiguracja publikacji'],
        },
        {
          title: 'Kierunek marki i designu',
          description: 'Pomagamy uporządkować wygląd, strukturę i język strony, żeby marka była bardziej wyrazista, spójna i premium.',
          includes: ['Audyt wizualny', 'Moodboard i referencje', 'Art direction', 'Koncepcja strony głównej', 'Podstawy systemu designu', 'Styl ruchu i interakcji'],
        },
        {
          title: 'Pełne systemy cyfrowe',
          description: 'Dla projektów, w których sama strona to za mało: rezerwacje, formularze, system treści albo proste automatyzacje.',
          includes: ['Ścieżki użytkownika', 'Rezerwacje albo zgłoszenia', 'Formularze leadowe', 'Model treści i CMS', 'Integracje', 'Przekazanie operacyjne'],
        },
      ],
    },
    services: {
      label: 'PROCES',
      heading: 'Jak powstaje projekt',
      intro: 'Najpierw układamy kierunek, potem projektujemy, budujemy i publikujemy stronę z takim procesem, żeby działać sprawnie bez gubienia jakości.',
      groups: [
        {
          category: 'Kierunek',
          description: 'Ustalamy, co strona ma powiedzieć, jak ma być odbierana i jaka struktura najlepiej wyjaśni ofertę.',
          items: [{ title: 'Pozycjonowanie' }, { title: 'Struktura' }, { title: 'Kierunek UX' }, { title: 'Kierunek treści' }],
        },
        {
          category: 'Projekt',
          description: 'Projektujemy kluczowe ekrany, system wizualny i interakcje tak, żeby pierwsze wrażenie było mocne, jasne i zapamiętywalne.',
          items: [{ title: 'Art direction' }, { title: 'Projekt interfejsu' }, { title: 'System wizualny' }, { title: 'Motion' }],
        },
        {
          category: 'Budowa',
          description: 'Budujemy stronę jako indywidualne, responsywne wdrożenie frontendowe, szybkie, uporządkowane i gotowe do publikacji.',
          items: [{ title: 'Indywidualny frontend' }, { title: 'Responsywne wdrożenie' }, { title: 'Performance' }, { title: 'Struktura pod wyszukiwanie' }],
        },
        {
          category: 'Publikacja i opieka',
          description: 'Po wspólnym sprawdzeniu i dopracowaniu strona trafia online. Jeśli trzeba, zostajemy przy aktualizacjach, zmianach i opiece technicznej.',
          items: [{ title: 'Publikacja' }, { title: 'Hosting' }, { title: 'Utrzymanie' }, { title: 'Aktualizacje' }],
        },
      ],
      note: 'Projekt startuje po zatwierdzeniu zakresu i wpłacie zaliczki.',
    },
    work: {
      label: 'WYBRANE PRACE',
      carouselLabel: 'Interaktywna prezentacja wybranych projektów',
      viewProject: 'Odwiedź',
      previewProject: 'Zapowiedź',
      projects: {
        hubert: {
          description: 'Strona osobista zbudowana wokół obecności, prostoty i mocnego pierwszego wrażenia.',
          roles: ['Web design', 'Development'],
        },
        uroki: {
          description: 'Wizualna strona dla studia tatuażu z mocnym charakterem i dopracowaną ścieżką klienta.',
          roles: ['Kierunek kreatywny', 'Web design', 'Development'],
        },
        panenka: {
          description: 'Strona dla studia kreatywnego, która od razu pokazuje charakter, ruch i pewność wizualną.',
          roles: ['Web design', 'Development', 'Interakcje'],
        },
        esthetic: {
          description: 'Spokojna, elegancka strona dla praktyki dentalnej i estetycznej.',
          roles: ['Web design', 'Development', 'Kierunek wizualny'],
        },
        adfidence: {
          description: 'Nowocześniejsza strona dla firmy skupionej na performance i marketingu.',
          roles: ['Web design', 'Development', 'System interfejsu'],
        },
        amvis: {
          description: 'Redesign strony biura rachunkowego przygotowywany do startu.',
          roles: ['W toku'],
        },
      },
    },
    testimonials: {
      label: 'OPINIE',
      lead: 'Strona dała im pewność, zanim jeszcze przyszli na miejsce.',
      items: [
        {
          lead: 'Strona dała im pewność, zanim jeszcze przyszli na miejsce.',
          quote: 'NEWFRAME przełożyło naszą wizję na stronę, którą naprawdę chcemy pokazywać ludziom. Wygląda jak my, a nie jak gotowy szablon z podmienionym logo. Klienci mówili nam, że sama strona dała im pewność, żeby do nas przyjść.',
          highlights: ['pokazywać', 'pewność'],
          name: 'Hubert K.',
          role: 'MANAGER, UROKI TATTOO',
        },
        {
          lead: 'Nowa strona robi więcej niż poprzednia kiedykolwiek robiła.',
          quote: 'Współpraca z NEWFRAME była po prostu konkretna. Bez lania wody i bez przeciągania procesu. Jed szybko zrozumiał, czego potrzebujemy, i dowiózł stronę, która naprawdę podniosła poziom naszej marki. Nowa strona robi dla nas więcej niż poprzednia kiedykolwiek robiła.',
          highlights: ['konkretna', 'podniosła', 'więcej'],
          name: 'Igor M.',
          role: 'ZAŁOŻYCIEL, PANENKA CREATIVES',
        },
      ],
    },
    contact: {
      cta: 'Porozmawiajmy',
      prompt: 'Wyślij obecną stronę, pomysł albo problem. Odpowiemy konkretnie i zaproponujemy najlepszy następny krok.',
    },
    footer: {
      cta: 'Zróbmy coś razem',
      navigation: 'Nawigacja',
      info: 'Info',
      available: 'Dostępny do projektów',
      rights: 'Wszelkie prawa zastrzeżone',
      backToTop: 'Wróć na górę',
      privacy: 'Prywatność',
      email: 'Email',
    },
    notFound: {
      title: 'Nie znaleźliśmy tej strony',
      description: 'Ta strona nie istnieje albo została przeniesiona.',
      backHome: 'Wróć na stronę główną',
    },
    privacy: {
      title: 'Prywatność',
      heading: 'Prywatność',
      intro: 'Prosto i jasno: zbieramy tylko to, co jest potrzebne do działania strony.',
      noCollection: 'Po naszej stronie nie prowadzimy analityki, nie ustawiamy własnych plików cookie i nie budujemy profili odwiedzających.',
      thirdParty: 'Strona może ładować fonty z Google Fonts oraz bibliotekę efektów wizualnych z jsDelivr. Te usługi mogą przetwarzać standardowe dane techniczne, takie jak adres IP, zgodnie ze swoimi politykami prywatności.',
      contact: 'Jeśli masz pytania dotyczące prywatności, napisz do nas na',
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
