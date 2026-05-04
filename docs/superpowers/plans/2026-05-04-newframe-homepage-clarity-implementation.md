# Newframe Homepage Clarity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the existing Newframe homepage with clearer offer, process, outcomes, contact, SEO, and richer work tooltip context while preserving the current premium editorial design language.

**Architecture:** Keep the site as a single Astro homepage per locale with all user-facing text in `src/i18n/translations.ts`. Add two focused static sections (`WaysToWork.astro`, `Process.astro`), refactor the existing services section into outcomes, and minimally extend existing components instead of redesigning them.

**Tech Stack:** Astro 5, TypeScript strict mode, Tailwind CSS v4 utilities, local CSS in `.astro` components, GSAP only in components that already need interaction, current i18n helper functions.

---

## Source References

- Design spec: `docs/superpowers/specs/2026-05-04-newframe-homepage-clarity-design.md`
- Source implementation plan: `/Users/jed/Downloads/NEWFRAME_WEBSITE_IMPLEMENTATION_PLAN.md`
- Project rules: `AGENTS.md`

## File Structure Map

- `src/i18n/translations.ts`
  - Owns every public string for `pl` and `en`.
  - Add structured data for hero offer, work tooltip metadata, ways to work, outcomes, process, testimonial lead, contact note, and updated SEO.
- `src/components/sections/Hero.astro`
  - Preserve current wordmark/corner metadata/GSAP behavior.
  - Render translated offer statement, supporting copy, and two CTA links.
- `src/components/sections/About.astro`
  - Keep current WebGL/image treatment and scroll reveal.
  - Render updated founder copy and a local/remote note from translations.
- `src/components/sections/WorkSelectedMinimal.astro`
  - Preserve current six-card layout and animation.
  - Extend project data with localized tooltip description and role tags.
- `src/components/sections/WaysToWork.astro`
  - New static section using existing typography, lines, spacing, and color tokens.
  - Render three engagement types and the soft pricing anchor.
- `src/components/sections/Services.astro`
  - Refactor content and labels from abstract capabilities into outcomes.
  - Preserve the existing grouped-list visual language where possible.
- `src/components/sections/Process.astro`
  - New static section using numbered steps and restrained editorial styling.
- `src/components/sections/Testimonials.astro`
  - Keep the current scroll panels and add a lead quote/headline.
- `src/components/global/Footer.astro`
  - Keep current Gmail.
  - Add specific contact copy above the email link.
- `src/layouts/Base.astro`
  - Update JSON-LD default description language to match the new positioning.
- `src/pages/pl/index.astro`
  - Insert new sections in the approved order.
- `src/pages/en/index.astro`
  - Mirror the same section order.

## Task 1: Translation Data And SEO

**Files:**
- Modify: `src/i18n/translations.ts`

- [ ] **Step 1: Open the current translation file**

Run:

```bash
sed -n '1,320p' src/i18n/translations.ts
```

Expected: the existing `translations` object contains `en` and `pl` branches with `seo`, `nav`, `hero`, `about`, `services`, `work`, `testimonials`, `contact`, and `footer`.

- [ ] **Step 2: Replace and extend the `en` translation branch**

In `src/i18n/translations.ts`, update the `en` branch so it contains these public values. Preserve existing `privacy`, `notFound`, and language helper exports exactly as they are.

```ts
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
```

- [ ] **Step 3: Replace and extend the `pl` translation branch**

In the `pl` branch, add the same object keys using natural Polish copy:

```ts
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
      roles: ['Coming soon'],
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
```

- [ ] **Step 4: Run a TypeScript/Astro build check**

Run:

```bash
npm run build
```

Expected: build succeeds or fails only because components do not yet consume new keys. If TypeScript reports duplicate object keys or malformed syntax in `translations.ts`, fix the syntax before continuing.

- [ ] **Step 5: Commit translation data**

Run:

```bash
git add src/i18n/translations.ts
git commit -m "feat: add homepage clarity copy"
```

Expected: a commit containing only `src/i18n/translations.ts`.

## Task 2: Hero Clarity Pass

**Files:**
- Modify: `src/components/sections/Hero.astro`

- [ ] **Step 1: Add offer copy and CTA markup below the `NEW FRAME` wordmark**

In `Hero.astro`, keep the current `<h1 id="hero-title">` block. Immediately after the title wrapper, add this translated offer block:

```astro
    <div
      id="hero-offer"
      class="hero-offer mx-auto mt-8 md:mt-10 max-w-[760px] text-center opacity-0"
    >
      <p class="hero-offer__statement">{t.hero.statement}</p>
      <p class="hero-offer__subcopy">{t.hero.subcopy}</p>
      <div class="hero-offer__actions">
        <a href={`/${lang}/#contact`} class="hero-offer__link hero-offer__link--primary" data-cursor="CLICK">
          {t.hero.primaryCta}
        </a>
        <a href={`/${lang}/#work`} class="hero-offer__link" data-cursor="CLICK">
          {t.hero.secondaryCta}
        </a>
      </div>
    </div>
```

- [ ] **Step 2: Add local CSS for the offer block**

Add a `<style>` block before the existing `<script>` in `Hero.astro`:

```astro
<style>
  .hero-offer {
    color: var(--color-text);
  }

  .hero-offer__statement {
    font-family: var(--font-serif);
    font-size: clamp(1.55rem, 3vw, 2.65rem);
    line-height: 1.08;
    letter-spacing: 0;
  }

  .hero-offer__subcopy {
    max-width: 37rem;
    margin: 1rem auto 0;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    line-height: 1.65;
    letter-spacing: 0.02em;
    color: var(--color-text-muted);
  }

  .hero-offer__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.35rem;
  }

  .hero-offer__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-height: 2.5rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text);
    text-decoration: none;
  }

  .hero-offer__link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.42rem;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s var(--ease-out-expo);
  }

  .hero-offer__link:hover::after,
  .hero-offer__link--primary::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .hero-offer__link--primary {
    color: var(--color-accent);
  }

  @media (max-width: 767px) {
    .hero-offer {
      margin-top: 1.75rem;
      padding-inline: 0.35rem;
    }

    .hero-offer__subcopy {
      font-size: 0.7rem;
    }

    .hero-offer__actions {
      gap: 0.55rem 1rem;
    }
  }
</style>
```

- [ ] **Step 3: Include the offer in existing hero animations**

In the `initHero()` script, add:

```ts
    const offerEl = document.getElementById('hero-offer');
```

Set and reveal it alongside corners:

```ts
      gsap.set(offerEl, { opacity: 1, y: 0 });
```

inside the `alreadyLoaded` branch, and:

```ts
      gsap.set(offerEl, { opacity: 0, y: 18 });
```

inside the first-load branch before `playEntrance()`.

In the entrance timeline, add:

```ts
        entranceTl.to(offerEl, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.45');
```

In `prefersReducedMotion`, set the offer visible:

```ts
          gsap.set(offerEl, { opacity: 1, y: 0 });
```

Add the offer to the scroll fade:

```ts
        const offerTween = gsap.to(offerEl, {
          y: -18,
          opacity: 0.45,
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
        if (offerTween.scrollTrigger) scrollTriggers.push(offerTween.scrollTrigger);
```

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 5: Commit hero changes**

Run:

```bash
git add src/components/sections/Hero.astro
git commit -m "feat: clarify homepage hero"
```

Expected: a commit containing only `Hero.astro`.

## Task 3: About Copy Refinement

**Files:**
- Modify: `src/components/sections/About.astro`

- [ ] **Step 1: Confirm current About uses translated manifesto/body**

Run:

```bash
rg -n "t\\.about\\.(manifesto|body|manifestoHighlights|founder|role)" src/components/sections/About.astro
```

Expected: the component already renders translated manifesto, body, highlights, founder, and role.

- [ ] **Step 2: Leave component structure intact**

No markup change is required when Task 1 updated the translation values. Keep the current WebGL block, split text animation, and sticky body text.

- [ ] **Step 3: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds with the updated translated text.

- [ ] **Step 4: Commit only if a markup adjustment was made**

If this task changed no file, skip the commit. If the implementation changed `About.astro` to fix text wrapping, run:

```bash
git add src/components/sections/About.astro
git commit -m "feat: refine founder section copy layout"
```

Expected: no commit for data-only changes; a focused commit only when `About.astro` changed.

## Task 4: Ways To Work Section

**Files:**
- Create: `src/components/sections/WaysToWork.astro`
- Modify: `src/pages/pl/index.astro`
- Modify: `src/pages/en/index.astro`

- [ ] **Step 1: Create the new component**

Create `src/components/sections/WaysToWork.astro` with this content:

```astro
---
import type { Lang } from '../../i18n/translations';
import { useTranslations } from '../../i18n/translations';

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section id="ways-to-work" class="ways-to-work">
  <div class="ways-to-work__inner">
    <div class="ways-to-work__label-row">
      <h2 class="text-mono-xs text-[var(--color-text)]">{t.waysToWork.label}</h2>
      <div class="ways-to-work__line"></div>
    </div>

    <div class="ways-to-work__intro">
      <p class="ways-to-work__heading">{t.waysToWork.heading}</p>
      <p class="ways-to-work__copy">{t.waysToWork.intro}</p>
    </div>

    <div class="ways-to-work__list">
      {t.waysToWork.items.map((item, index) => (
        <article class="ways-to-work__item">
          <div class="ways-to-work__index text-mono-xs">{String(index + 1).padStart(2, '0')}</div>
          <div class="ways-to-work__content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.includes.map((entry) => (
                <li>{entry}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>

    <p class="ways-to-work__pricing text-mono-xs">{t.waysToWork.pricing}</p>
  </div>
</section>

<style>
  .ways-to-work {
    position: relative;
    padding: clamp(7rem, 12vw, 11rem) 1.5rem;
    background: var(--color-bg);
    color: var(--color-text);
  }

  @media (min-width: 768px) {
    .ways-to-work {
      padding-inline: 2.5rem;
    }
  }

  .ways-to-work__inner {
    width: min(100%, 1400px);
    margin: 0 auto;
  }

  .ways-to-work__label-row {
    margin-bottom: clamp(3rem, 6vw, 5.5rem);
  }

  .ways-to-work__line {
    width: 100%;
    height: 1px;
    margin-top: 1rem;
    background: var(--color-text);
  }

  .ways-to-work__intro {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: clamp(3.5rem, 7vw, 6rem);
  }

  @media (min-width: 900px) {
    .ways-to-work__intro {
      grid-template-columns: minmax(0, 0.95fr) minmax(18rem, 0.55fr);
      align-items: end;
    }
  }

  .ways-to-work__heading {
    max-width: 56rem;
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6.75rem);
    line-height: 0.9;
    letter-spacing: 0;
  }

  .ways-to-work__copy {
    max-width: 29rem;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.7;
    letter-spacing: 0.02em;
    color: var(--color-text-muted);
  }

  .ways-to-work__list {
    border-top: 1px solid var(--color-border-strong);
  }

  .ways-to-work__item {
    display: grid;
    grid-template-columns: 3.5rem minmax(0, 1fr);
    gap: 1.25rem;
    padding: clamp(1.5rem, 3vw, 2.5rem) 0;
    border-bottom: 1px solid var(--color-border-strong);
  }

  @media (min-width: 900px) {
    .ways-to-work__item {
      grid-template-columns: 8rem minmax(0, 1fr);
    }
  }

  .ways-to-work__index {
    color: var(--color-accent);
  }

  .ways-to-work__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 900px) {
    .ways-to-work__content {
      grid-template-columns: minmax(14rem, 0.7fr) minmax(18rem, 1fr) minmax(15rem, 0.7fr);
      align-items: start;
    }
  }

  .ways-to-work__content h3 {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.6vw, 3.35rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
  }

  .ways-to-work__content p,
  .ways-to-work__content li {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    line-height: 1.65;
    letter-spacing: 0.02em;
    color: var(--color-text-muted);
  }

  .ways-to-work__content ul {
    display: grid;
    gap: 0.42rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ways-to-work__content li::before {
    content: '—';
    margin-right: 0.5rem;
    color: var(--color-accent);
  }

  .ways-to-work__pricing {
    max-width: 36rem;
    margin-top: 2rem;
    color: var(--color-text-subtle);
  }
</style>
```

- [ ] **Step 2: Insert the component in both homepages**

In `src/pages/pl/index.astro` and `src/pages/en/index.astro`, add:

```astro
import WaysToWork from '../../components/sections/WaysToWork.astro';
```

Render it after `<WorkSelectedMinimal lang="..." />` and before the outcomes/services section:

```astro
  <WorkSelectedMinimal lang="pl" />
  <WaysToWork lang="pl" />
```

and:

```astro
  <WorkSelectedMinimal lang="en" />
  <WaysToWork lang="en" />
```

- [ ] **Step 3: Keep `Services` after `WaysToWork`**

Move the existing `<Services lang="..." />` render so the page order becomes:

```astro
  <Hero lang="pl" />
  <About lang="pl" />
  {showLegacyWork && <WorkCarousel lang="pl" />}
  <WorkSelectedMinimal lang="pl" />
  <WaysToWork lang="pl" />
  <Services lang="pl" />
  <Testimonials lang="pl" />
```

Apply the same order for `en`.

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds and both locale pages include `WaysToWork`.

- [ ] **Step 5: Commit ways-to-work section**

Run:

```bash
git add src/components/sections/WaysToWork.astro src/pages/pl/index.astro src/pages/en/index.astro
git commit -m "feat: add ways to work section"
```

Expected: a commit containing the new component and page insertion.

## Task 5: Outcomes Refactor In Services

**Files:**
- Modify: `src/components/sections/Services.astro`

- [ ] **Step 1: Add group descriptions to the service layout**

In `Services.astro`, inside `.service-category-col`, replace:

```astro
<h3 class="service-category">{group.category}</h3>
```

with:

```astro
<div class="service-category-block">
  <h3 class="service-category">{group.category}</h3>
  <p class="service-description">{group.description}</p>
</div>
```

- [ ] **Step 2: Add the outcomes note before the CTA**

Above the existing `<!-- CTA -->` block, add:

```astro
    <p class="services-note text-mono-xs">{t.services.note}</p>
```

- [ ] **Step 3: Add CSS for the description and note**

Inside the existing `<style>` block in `Services.astro`, add:

```css
  .service-category-block {
    display: grid;
    gap: 1rem;
    max-width: 26rem;
  }

  .service-description {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    line-height: 1.65;
    letter-spacing: 0.02em;
    color: var(--color-text-muted);
  }

  .services-note {
    max-width: 38rem;
    margin-top: clamp(3rem, 6vw, 5rem);
    color: var(--color-text-subtle);
  }

  @media (max-width: 767px) {
    .service-group-inner {
      display: grid;
      gap: 1rem;
    }

    .service-category-col {
      width: 100%;
      position: relative;
      top: auto;
    }
  }
```

- [ ] **Step 4: Confirm existing animation selectors still exist**

Run:

```bash
rg -n "service-row|service-title|service-category|service-line-fill|services-note" src/components/sections/Services.astro
```

Expected: all selectors appear. The existing GSAP code still finds `.service-row`, `.service-title`, `.service-category`, and `.service-line-fill`.

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 6: Commit outcomes refactor**

Run:

```bash
git add src/components/sections/Services.astro
git commit -m "feat: reframe capabilities as outcomes"
```

Expected: a focused commit containing only `Services.astro`.

## Task 6: Process Section

**Files:**
- Create: `src/components/sections/Process.astro`
- Modify: `src/pages/pl/index.astro`
- Modify: `src/pages/en/index.astro`

- [ ] **Step 1: Create the process component**

Create `src/components/sections/Process.astro`:

```astro
---
import type { Lang } from '../../i18n/translations';
import { useTranslations } from '../../i18n/translations';

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section id="process" class="process-section">
  <div class="process-section__inner">
    <div class="process-section__label-row">
      <h2 class="text-mono-xs text-[var(--color-text)]">{t.process.label}</h2>
      <div class="process-section__line"></div>
    </div>

    <div class="process-section__header">
      <p>{t.process.heading}</p>
    </div>

    <div class="process-section__steps">
      {t.process.steps.map((step, index) => (
        <article class="process-section__step">
          <span class="process-section__number text-mono-xs">{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>

    <p class="process-section__note text-mono-xs">{t.process.note}</p>
  </div>
</section>

<style>
  .process-section {
    position: relative;
    padding: clamp(7rem, 12vw, 11rem) 1.5rem;
    background: var(--color-bg);
    color: var(--color-text);
  }

  @media (min-width: 768px) {
    .process-section {
      padding-inline: 2.5rem;
    }
  }

  .process-section__inner {
    width: min(100%, 1400px);
    margin: 0 auto;
  }

  .process-section__label-row {
    margin-bottom: clamp(3rem, 6vw, 5rem);
  }

  .process-section__line {
    width: 100%;
    height: 1px;
    margin-top: 1rem;
    background: var(--color-text);
  }

  .process-section__header {
    max-width: 62rem;
    margin-bottom: clamp(3.5rem, 7vw, 6rem);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 7rem);
    line-height: 0.9;
    letter-spacing: 0;
  }

  .process-section__steps {
    display: grid;
    grid-template-columns: 1fr;
    border-top: 1px solid var(--color-border-strong);
  }

  @media (min-width: 900px) {
    .process-section__steps {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border-left: 1px solid var(--color-border-strong);
    }
  }

  .process-section__step {
    min-height: 16rem;
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-border-strong);
  }

  @media (min-width: 900px) {
    .process-section__step {
      border-right: 1px solid var(--color-border-strong);
    }
  }

  .process-section__number {
    color: var(--color-accent);
  }

  .process-section__step h3 {
    margin-top: 2.5rem;
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
  }

  .process-section__step p {
    max-width: 21rem;
    margin-top: 1rem;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    line-height: 1.65;
    letter-spacing: 0.02em;
    color: var(--color-text-muted);
  }

  .process-section__note {
    max-width: 34rem;
    margin-top: 2rem;
    color: var(--color-text-subtle);
  }
</style>
```

- [ ] **Step 2: Insert the component in both homepages**

In both locale pages, add:

```astro
import Process from '../../components/sections/Process.astro';
```

Render it after `<Services lang="..." />` and before `<Testimonials lang="..." />`:

```astro
  <Services lang="pl" />
  <Process lang="pl" />
  <Testimonials lang="pl" />
```

and:

```astro
  <Services lang="en" />
  <Process lang="en" />
  <Testimonials lang="en" />
```

- [ ] **Step 3: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 4: Commit process section**

Run:

```bash
git add src/components/sections/Process.astro src/pages/pl/index.astro src/pages/en/index.astro
git commit -m "feat: add project process section"
```

Expected: a commit containing the new process component and page insertion.

## Task 7: Selected Work Tooltip Context

**Files:**
- Modify: `src/components/sections/WorkSelectedMinimal.astro`

- [ ] **Step 1: Extend the `GridProject` type**

Replace the current `GridProject` type with:

```ts
type GridProject = {
  key: keyof typeof t.work.projects;
  name: string;
  image?: string;
  category: string;
  url: string;
  placeholder?: boolean;
  tone?: 'warm' | 'cool';
};
```

- [ ] **Step 2: Add keys to each project object**

Update local projects in `WorkSelectedMinimal.astro`:

```ts
const hubertProject: GridProject = {
  key: 'hubert',
  name: 'HUBERT',
  image: '/images/work/hubert.jpg',
  category: 'WEB',
  url: 'https://hubertkesik.com/',
};

const amvisProject: GridProject = {
  key: 'amvis',
  name: 'AMVIS',
  category: 'COMING SOON',
  url: '#',
  placeholder: true,
  tone: 'cool',
};
```

Map imported projects with keys:

```ts
const projectKeys = ['uroki', 'panenka', 'esthetic', 'adfidence'] as const;
const keyedProjects: GridProject[] = allProjects.map((project, index) => ({
  ...project,
  key: projectKeys[index],
}));

const gridProjects: GridProject[] = [hubertProject, ...keyedProjects, amvisProject];
```

- [ ] **Step 3: Add tooltip data attributes to each card**

Inside the `gridProjects.map`, add:

```astro
const meta = t.work.projects[project.key];
```

Replace the current `data-tooltip-title={project.name}` with:

```astro
data-tooltip-title={project.name}
data-tooltip-description={meta.description}
data-tooltip-roles={meta.roles.join(' · ')}
aria-label={`${project.name}. ${project.category}. ${meta.description}`}
```

Remove any duplicate old `aria-label` on that same `<a>`.

- [ ] **Step 4: Replace tooltip HTML generation**

In the `setTarget` function, replace:

```ts
tooltip.innerHTML = `<span>${label} ${title}</span><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 11L11 1M11 1H3M11 1V9"/></svg>`;
```

with:

```ts
const description = card.dataset.tooltipDescription || '';
const roles = card.dataset.tooltipRoles || '';
tooltip.innerHTML = `
  <span class="work-grid-reference__tooltip-kicker">${label} ${title}</span>
  <span class="work-grid-reference__tooltip-description">${description}</span>
  <span class="work-grid-reference__tooltip-roles">${roles}</span>
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 11L11 1M11 1H3M11 1V9"/></svg>
`;
```

- [ ] **Step 5: Update tooltip CSS**

Replace the current `.work-grid-reference__tooltip` CSS block with:

```css
  .work-grid-reference__tooltip {
    position: fixed;
    z-index: 80;
    left: 0;
    top: 0;
    display: grid;
    gap: 0.38rem;
    width: min(22rem, calc(100vw - 2rem));
    padding: 0.75rem 0.85rem;
    border-radius: 3px;
    background: var(--color-accent);
    color: #fff;
    pointer-events: none;
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.96);
    transition: opacity 0.24s ease, transform 0.34s var(--ease-out-expo);
  }

  .work-grid-reference__tooltip.is-active {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale(1);
  }

  .work-grid-reference__tooltip-kicker,
  .work-grid-reference__tooltip-roles {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    line-height: 1.25;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .work-grid-reference__tooltip-description {
    max-width: 18rem;
    font-family: var(--font-serif);
    font-size: 1.06rem;
    line-height: 1.08;
    letter-spacing: 0;
  }

  .work-grid-reference__tooltip-roles {
    color: rgba(255, 255, 255, 0.68);
  }

  .work-grid-reference__tooltip svg {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    width: 0.72rem;
    height: 0.72rem;
  }

  @media (hover: none) {
    .work-grid-reference__tooltip {
      display: none;
    }
  }
```

- [ ] **Step 6: Remove unused tooltip variables**

Run:

```bash
rg -n "data-tooltip-description|data-tooltip-roles|work-grid-reference__tooltip-description" src/components/sections/WorkSelectedMinimal.astro
```

Expected: the data attributes and CSS classes are present.

- [ ] **Step 7: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 8: Commit tooltip update**

Run:

```bash
git add src/components/sections/WorkSelectedMinimal.astro
git commit -m "feat: add selected work tooltip context"
```

Expected: a focused commit containing only the tooltip enhancement.

## Task 8: Testimonials Lead And Footer Contact Copy

**Files:**
- Modify: `src/components/sections/Testimonials.astro`
- Modify: `src/components/global/Footer.astro`

- [ ] **Step 1: Render testimonial lead line**

In `Testimonials.astro`, inside the top bar after the counter span, add:

```astro
          <p class="testimonial-lead hidden lg:block">{t.testimonials.lead}</p>
```

- [ ] **Step 2: Add CSS for the testimonial lead**

Add to the `<style>` block:

```css
  .testimonial-lead {
    max-width: 22rem;
    font-family: var(--font-serif);
    font-size: clamp(1.35rem, 2vw, 2rem);
    line-height: 1.05;
    letter-spacing: 0;
    color: var(--color-text);
    text-align: right;
  }
```

- [ ] **Step 3: Add contact prompt to footer**

In `Footer.astro`, below the giant CTA `<h2 id="footer-cta"...>` and above the email link, add:

```astro
      <p class="footer-contact-prompt">
        {t.contact.prompt}
      </p>
```

- [ ] **Step 4: Add footer prompt CSS**

Add to the footer `<style>` block:

```css
  .footer-contact-prompt {
    max-width: 32rem;
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.65;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.72);
  }
```

- [ ] **Step 5: Confirm Gmail remains unchanged**

Run:

```bash
rg -n "jed\\.mejzner@gmail\\.com|newframe\\.studio" src/components/global/Footer.astro src/i18n/translations.ts
```

Expected: `Footer.astro` still contains `jed.mejzner@gmail.com`; `translations.ts` does not introduce a public `jed@newframe.studio` contact address.

- [ ] **Step 6: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 7: Commit testimonials/footer**

Run:

```bash
git add src/components/sections/Testimonials.astro src/components/global/Footer.astro
git commit -m "feat: sharpen testimonials and contact copy"
```

Expected: a commit containing testimonial lead and footer prompt only.

## Task 9: Navigation And Metadata Polish

**Files:**
- Modify: `src/components/global/Nav.astro`
- Modify: `src/components/global/Footer.astro`
- Modify: `src/layouts/Base.astro`

- [ ] **Step 1: Add process link to desktop nav**

In `Nav.astro`, add this link between services and contact in the desktop nav:

```astro
    <a href={`/${lang}/#process`} class="nav-link text-mono-xs opacity-60 hover:opacity-100 hover:text-[var(--color-accent)] transition-all duration-300">
      {t.nav.process}
    </a>
```

- [ ] **Step 2: Add process link to mobile menu**

In the mobile menu link list, add:

```astro
    <a href={`/${lang}/#process`} class="mobile-menu-link text-display-lg text-right opacity-0 translate-y-8">{t.nav.process}</a>
```

between services and contact.

- [ ] **Step 3: Add process link to footer navigation**

In `Footer.astro`, add a footer nav item between services and contact:

```astro
            <li>
              <a href={`/${lang}/#process`} class="footer-link text-sm text-white/70 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group">
                <span class="w-0 group-hover:w-3 h-px bg-white transition-all duration-300"></span>
                <span class="scramble-target">{t.nav.process}</span>
              </a>
            </li>
```

- [ ] **Step 4: Update JSON-LD organization description**

In `Base.astro`, replace:

```ts
description: "Web design and branding studio for startups and small businesses.",
```

with:

```ts
description: "Small design studio creating custom websites and digital experiences for founders, premium services and growing businesses.",
```

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: Astro build succeeds.

- [ ] **Step 6: Commit nav and metadata polish**

Run:

```bash
git add src/components/global/Nav.astro src/components/global/Footer.astro src/layouts/Base.astro
git commit -m "feat: update navigation and metadata"
```

Expected: a commit containing navigation and JSON-LD updates.

## Task 10: Final Verification

**Files:**
- No new files required.

- [ ] **Step 1: Run production build**

Run:

```bash
npm run build
```

Expected: production build succeeds.

- [ ] **Step 2: Start dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Astro dev server starts and prints a local URL, usually `http://127.0.0.1:4321/`.

- [ ] **Step 3: Verify Polish homepage manually**

Open:

```text
http://127.0.0.1:4321/pl/
```

Expected:

- hero shows `NEW FRAME`, Polish statement, Polish subcopy, and two CTA links,
- page order is hero, about, selected work, ways to work, outcomes, process, testimonials, contact,
- current Gmail remains the visible email,
- no visible text overlaps at desktop width.

- [ ] **Step 4: Verify English homepage manually**

Open:

```text
http://127.0.0.1:4321/en/
```

Expected:

- same page order as Polish,
- English copy reads naturally and is not a literal mirror of Polish,
- nav links point to existing anchors,
- selected work cards still keep the six-card layout.

- [ ] **Step 5: Verify mobile layout manually**

Use browser device mode around `390px` width on both:

```text
http://127.0.0.1:4321/pl/
http://127.0.0.1:4321/en/
```

Expected:

- hero text and CTA links fit without overlap,
- mobile menu contains Work, Scope, Ways to Work, Process, Contact,
- Ways to Work and Process stack cleanly,
- selected work tooltip is hidden on touch and cards remain usable.

- [ ] **Step 6: Check for hardcoded new user-facing strings**

Run:

```bash
rg -n "Ways to work|How projects usually work|Wyślij mi|Most projects|Większość projektów|The website sold|Strona przekonała" src/components src/pages src/layouts
```

Expected: no matches in components/pages/layouts, because these strings are read from `src/i18n/translations.ts`.

- [ ] **Step 7: Check git status**

Run:

```bash
git status --short
```

Expected: only intentional implementation files are modified. Existing untracked `AGENTS.md` and `.superpowers/` can remain untracked and must not be included in implementation commits.

- [ ] **Step 8: Final commit for verification fixes**

If manual verification required small layout fixes, commit only those fixes:

```bash
git add src
git commit -m "fix: polish homepage clarity layout"
```

Expected: no commit is created when verification found no code changes.
