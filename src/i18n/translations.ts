const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    seo: {
      title: 'New Frame Studio | Web Design for Startups & Small Businesses',
      description: 'Custom web design and branding that converts. I help startups and small businesses look as good as they perform.',
      ogImageAlt: 'New Frame Studio - Web Design & Branding',
    },
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
      location: 'REMOTE',
      credit: 'JED MEJZNER \u00A925',
    },
    about: {
      label: 'ABOUT',
      manifesto: `I'm Jędrzej (Jed). I run NEWFRAME, a design studio for founders and growing businesses who understand that brand image is a competitive advantage. To build a distinct presence, you need a partner who cares about the craft. I start by listening to understand your goals and your audience, then I translate that into a digital experience that feels sharp, timeless, and distinct.`,
      manifestoHighlights: ['NEWFRAME', 'competitive', 'advantage', 'distinct'],
      body: `My focus is simple. Building a website that reflects the true quality of your business and commands the attention it deserves.`,
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
      carouselLabel: 'Interactive 3D carousel showcasing selected design projects',
    },
    testimonials: {
      label: 'WHAT THEY SAY',
      items: [
        {
          quote: "Jed took our vision and turned it into something we're genuinely proud to show people. The site feels like us, not some generic template with our logo slapped on. We've had clients tell us the website sold them before they even walked in.",
          highlights: ['genuinely', 'proud', 'sold'],
          name: 'Magda K.',
          role: 'OWNER, UROKI TATTOO',
        },
        {
          quote: 'Working with Jed was refreshingly straightforward. No fluff, no endless revisions. He understood what we needed and delivered something that actually elevated our brand. The site works harder for us than our old one ever did.',
          highlights: ['straightforward', 'elevated', 'harder'],
          name: 'Kasia M.',
          role: 'FOUNDER, ESTHETIC',
        },
        {
          quote: "Jed didn't just design a brand for us. He helped us figure out who we actually are. The identity he built gave us the confidence to show up differently in our market. That kind of clarity is rare.",
          highlights: ['confidence', 'clarity'],
          name: 'Tomek R.',
          role: 'CEO, ADFIDENCE',
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
    seo: {
      title: 'New Frame Studio | Projektowanie stron dla startupów i małych firm',
      description: 'Indywidualny web design i branding, który konwertuje. Pomagam startupom i małym firmom wyglądać tak dobrze, jak działają.',
      ogImageAlt: 'New Frame Studio - Web Design i Branding',
    },
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
      location: 'ZDALNIE',
      credit: 'JED MEJZNER \u00A925',
    },
    about: {
      label: 'O MNIE',
      manifesto: `Cześć, jestem Jędrzej (Jed). Prowadzę NEWFRAME, studio projektowe dla firm, które wiedzą, że wizerunek to realna przewaga. Aby wyróżnić się na rynku, potrzebujesz partnera, który traktuje design jak rzemiosło. Zaczynam od zrozumienia Twoich celów i odbiorców, a potem przekuwam to w wyrazisty, ponadczasowy i przemyślany projekt.`,
      manifestoHighlights: ['NEWFRAME', 'realna', 'przewaga', 'wyrazisty'],
      body: `Mój cel jest prosty. Stworzyć stronę, która oddaje faktyczną jakość Twojego biznesu i przyciąga uwagę, na którą zasługujesz.`,
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
      carouselLabel: 'Interaktywna karuzela 3D prezentująca wybrane projekty',
    },
    testimonials: {
      label: 'CO MÓWIĄ',
      items: [
        {
          quote: 'Jed wziął naszą wizję i zamienił ją w coś, czym naprawdę chcemy się chwalić. Strona wygląda jak my, nie jak kolejny szablon z naszym logo. Klienci mówią nam, że strona przekonała ich do nas zanim w ogóle do nas przyszli.',
          highlights: ['chwalić', 'przekonała'],
          name: 'Magda K.',
          role: 'WŁAŚCICIELKA, UROKI TATTOO',
        },
        {
          quote: 'Współpraca z Jedem była odświeżająco prosta. Bez lania wody, bez niekończących się poprawek. Zrozumiał czego potrzebujemy i dostarczył coś, co naprawdę podniosło naszą markę. Nowa strona pracuje dla nas lepiej niż stara kiedykolwiek to robiła.',
          highlights: ['prosta', 'podniosło', 'pracuje'],
          name: 'Kasia M.',
          role: 'ZAŁOŻYCIELKA, ESTHETIC',
        },
        {
          quote: 'Jed nie tylko zaprojektował markę. Pomógł nam zrozumieć, kim tak naprawdę jesteśmy. Identyfikacja, którą stworzył, dała nam odwagę żeby wyróżnić się na tle konkurencji. Taka klarowność to rzadkość.',
          highlights: ['zrozumieć', 'odwagę', 'klarowność'],
          name: 'Tomek R.',
          role: 'CEO, ADFIDENCE',
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
