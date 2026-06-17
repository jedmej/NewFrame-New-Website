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
      services: 'Offer',
      contact: 'Contact',
      mobileMenuLabel: 'Site navigation',
    },
    skipToContent: 'Skip to content',
    hero: {
      title: 'NEWFRAME',
      credit: 'STRATEGY, WEBSITES, AND MOTION FOR BRANDS WITH TASTE.',
      statement: 'Good work deserves a good frame.',
    },
    about: {
      label: '0 STUDIO',
      manifesto: `NEWFRAME is an independent studio creating distinctive websites and visual systems for founders and growing companies. We work with brands that understand how much first impressions shape trust, pricing and growth.`,
      manifestoHighlights: ['NEWFRAME', 'digital', 'studio', 'first impressions'],
    },
    waysToWork: {
      label: 'WHAT WE OFFER',
      rowsLayoutLabel: 'Offer row layout',
      items: [
        {
          metaLabel: 'Websites',
          includes: ['Offer architecture', 'Conversion sections', 'Interface design', 'Frontend development', 'Mobile performance', 'Launch setup'],
        },
        {
          metaLabel: 'Brand',
          includes: ['Visual audit', 'Reference boards', 'Art direction', 'Homepage concept', 'Design system basics', 'Motion and interaction style'],
        },
        {
          metaLabel: 'Systems',
          includes: ['User flows', 'Booking or intake flows', 'Lead capture forms', 'CMS content model', 'Integrations', 'Operational handoff'],
        },
      ],
    },
    work: {
      label: 'SELECTED WORK',
      carouselLabel: 'Interactive showcase of selected projects',
      viewProject: 'Visit',
      cards: {
        heading: 'Projects that prove first impressions are worth designing for',
        startProject: 'Start a project',
        carouselLabel: 'Horizontal showcase of selected projects',
      },
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
        karmel: {
          description: 'A branding-led web presence built around warmth, clarity and a confident first impression.',
          roles: ['Branding', 'Web design'],
        },
        amvis: {
          description: 'A composed, reassuring website for an accounting office that turns complex financial support into a calmer first impression.',
          roles: ['Web design', 'Development', 'Visual direction'],
        },
        atelierluma: {
          description: 'An immersive website for an interior design studio, built around atmosphere, materiality and a refined first impression.',
          roles: ['Web design', 'Development', 'Visual direction'],
        },
      },
    },
    testimonials: {
      label: 'TESTIMONIALS',
      heading: 'What are our clients saying about us?',
      items: [
        {
          quote: 'NEWFRAME turned our vision into a website we are genuinely proud to show people. It feels like us, not a template with our logo dropped in. Clients told us the site gave them confidence before they even walked in.',
          name: 'Marcin L.',
          role: 'UROKI TATTOO',
        },
        {
          quote: 'Working with NEWFRAME was refreshingly straightforward. No fluff and no dragging the process out. Jed quickly understood what we needed and delivered a site that genuinely raised the level of our brand. The new site does more for us than the old one ever did.',
          name: 'Igor M.',
          role: 'FOUNDER, PANENKA CREATIVES',
        },
        {
          quote: 'Before the design even started, the process helped us understand what the website needed to say. The final result felt calm, focused and much more premium than anything we could have assembled from a template.',
          name: 'Hubert K.',
          role: 'MOMENTY PHOTOGRAPHY',
        },
      ],
    },
    contact: {
      cta: "Let's talk",
      prompt: 'Send your current site, idea or problem. We will reply with a clear next step.',
    },
    footer: {
      cta: "Let's build great things together",
      navigation: 'Navigation',
      info: 'Info',
      rights: 'All rights reserved',
      privacy: 'Privacy',
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
      thirdParty: 'This site uses self-hosted fonts and may load visual effect shape data from data.shaders.com. That service may process standard technical data, such as IP address, under its own privacy policy.',
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
      services: 'Oferta',
      contact: 'Kontakt',
      mobileMenuLabel: 'Nawigacja strony',
    },
    skipToContent: 'Przejdź do treści',
    hero: {
      title: 'NEWFRAME',
      credit: 'STRATEGIA, STRONY I MOTION DLA MAREK Z WYCZUCIEM.',
      statement: 'Dobra marka zasługuje na dobrą oprawę.',
    },
    about: {
      label: '0 STUDIO',
      manifesto: `NEWFRAME to niezależne studio tworzące wyraziste strony i systemy wizualne dla założycieli oraz rozwijających się firm. Pracujemy z markami, które rozumieją, że pierwsze wrażenie wpływa na zaufanie, stawki i tempo wzrostu.`,
      manifestoHighlights: ['NEWFRAME', 'studio', 'cyfrowe', 'pierwsze wrażenie'],
    },
    waysToWork: {
      label: 'CO OFERUJEMY',
      rowsLayoutLabel: 'Oferta — układ wierszy',
      items: [
        {
          metaLabel: 'Strony',
          includes: ['Architektura oferty', 'Sekcje sprzedażowe', 'Projekt interfejsu', 'Wdrożenie frontendowe', 'Mobile i performance', 'Konfiguracja publikacji'],
        },
        {
          metaLabel: 'Marka',
          includes: ['Audyt wizualny', 'Moodboard i referencje', 'Art direction', 'Koncepcja strony głównej', 'Podstawy systemu designu', 'Styl ruchu i interakcji'],
        },
        {
          metaLabel: 'Systemy',
          includes: ['Ścieżki użytkownika', 'Rezerwacje albo zgłoszenia', 'Formularze leadowe', 'Model treści i CMS', 'Integracje', 'Przekazanie operacyjne'],
        },
      ],
    },
    work: {
      label: 'WYBRANE PRACE',
      carouselLabel: 'Interaktywna prezentacja wybranych projektów',
      viewProject: 'Odwiedź',
      cards: {
        heading: 'Projekty, które pokazują, że pierwsze wrażenie ma znaczenie',
        startProject: 'Rozpocznij projekt',
        carouselLabel: 'Pozioma prezentacja wybranych projektów',
      },
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
        karmel: {
          description: 'Obecność online oparta na brandingu, cieple i mocnym pierwszym wrażeniu.',
          roles: ['Branding', 'Web design'],
        },
        amvis: {
          description: 'Spokojna, uporządkowana strona dla biura rachunkowego, która przekłada złożone wsparcie finansowe na bardziej pewne pierwsze wrażenie.',
          roles: ['Web design', 'Development', 'Kierunek wizualny'],
        },
        atelierluma: {
          description: 'Wciągająca strona dla studia projektowania wnętrz, zbudowana wokół nastroju, materii i dopracowanego pierwszego wrażenia.',
          roles: ['Web design', 'Development', 'Kierunek wizualny'],
        },
      },
    },
    testimonials: {
      label: 'OPINIE',
      heading: 'Co mówią o nas klienci?',
      items: [
        {
          quote: 'NEWFRAME przełożyło naszą wizję na stronę, którą naprawdę chcemy pokazywać ludziom. Wygląda jak my, a nie jak gotowy szablon z podmienionym logo. Klienci mówili nam, że sama strona dała im pewność, żeby do nas przyjść.',
          name: 'Marcin L.',
          role: 'UROKI TATTOO',
        },
        {
          quote: 'Współpraca z NEWFRAME była po prostu konkretna. Bez lania wody i bez przeciągania procesu. Jed szybko zrozumiał, czego potrzebujemy, i dowiózł stronę, która naprawdę podniosła poziom naszej marki. Nowa strona robi dla nas więcej niż poprzednia kiedykolwiek robiła.',
          name: 'Igor M.',
          role: 'ZAŁOŻYCIEL, PANENKA CREATIVES',
        },
        {
          quote: 'Jeszcze przed projektowaniem uporządkowaliśmy to, co strona naprawdę ma komunikować. Efekt jest spokojny, skupiony i dużo bardziej premium niż cokolwiek, co moglibyśmy złożyć z gotowego szablonu.',
          name: 'Hubert K.',
          role: 'MOMENTY PHOTOGRAPHY',
        },
      ],
    },
    contact: {
      cta: 'Porozmawiajmy',
      prompt: 'Wyślij obecną stronę, pomysł albo problem. Odpowiemy konkretnie i zaproponujemy najlepszy następny krok.',
    },
    footer: {
      cta: 'Zróbmy razem coś fajnego.',
      navigation: 'Nawigacja',
      info: 'Info',
      rights: 'Wszelkie prawa zastrzeżone',
      privacy: 'Prywatność',
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
      thirdParty: 'Strona używa fontów hostowanych lokalnie i może ładować dane kształtów efektów wizualnych z data.shaders.com. Ta usługa może przetwarzać standardowe dane techniczne, takie jak adres IP, zgodnie ze swoją polityką prywatności.',
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
