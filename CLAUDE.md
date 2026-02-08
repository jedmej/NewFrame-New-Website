# CLAUDE.md — Newframe Studio

## Project Overview
Newframe is Jed Mejzner's portfolio/agency website for a web design studio. Single-page site with animated sections, bilingual (EN/PL), heavy use of scroll-driven animations and WebGL effects.

## Tech Stack
- **Framework:** Astro 5 with View Transitions (`ClientRouter`)
- **Styling:** Tailwind CSS v4 (Vite plugin, `@theme` tokens in `src/styles/global.css`)
- **Animation:** GSAP 3 (ScrollTrigger, SplitText, ScrambleTextPlugin, MorphSVGPlugin)
- **3D:** Three.js (tree-shaken named imports, NOT `import * as THREE`)
- **Smooth scroll:** Lenis (desktop only, >=1024px)
- **WebGL effects:** Unicorn Studio (CDN SDK, deferred)
- **TypeScript:** Strict mode (`astro/tsconfigs/strict`)

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── components/
│   ├── global/        # Nav, Footer, CustomCursor, Preloader
│   └── sections/      # Hero, Services, About, WorkCarousel, Testimonials
├── i18n/
│   └── translations.ts  # All EN/PL strings, getLangFromUrl(), useTranslations()
├── layouts/
│   ├── Base.astro     # HTML shell, fonts, meta, ClientRouter, Unicorn SDK
│   └── Page.astro     # Wraps Base + Nav/Footer/Preloader/Cursor + Lenis init
├── pages/
│   ├── index.astro    # Root redirect
│   ├── en/index.astro # English homepage
│   └── pl/index.astro # Polish homepage
└── styles/
    └── global.css     # Tailwind v4 import, @theme tokens, font-faces, utilities
public/
├── fonts/             # General Sans woff2 (Medium, Semibold, Bold)
└── favicon.svg
```

## Architecture Rules

### View Transitions & Cleanup Pattern
Every `<script>` in a component MUST follow this pattern:
1. Module-level `let cleanupFn: (() => void) | null = null;`
2. An `init()` function that calls `cleanupFn?.()` first, then sets up DOM/animations
3. Inside init: `AbortController` for event listeners, arrays to track `ScrollTrigger`/`SplitText` instances
4. `cleanupFn` assigned at end of init — aborts controller, kills ScrollTriggers, reverts SplitText
5. Call `init()` immediately + `document.addEventListener('astro:after-swap', init);`

This prevents memory leaks during Astro view transitions.

### i18n
- All user-facing strings live in `src/i18n/translations.ts`
- Components receive `lang` prop and call `useTranslations(lang)`
- Routes are prefix-based: `/en/` and `/pl/` (both prefixed, with redirect from `/`)
- Config in `astro.config.mjs`: `defaultLocale: 'en'`, `prefixDefaultLocale: true`

### Styling Conventions
- Design tokens defined in `global.css` under `@theme { }` — colors, fonts, easing
- Typography utilities as plain CSS classes: `.text-display-xl`, `.text-display-lg`, `.text-serif-display`, `.text-mono-sm`, `.text-mono-xs`
- Use Tailwind utilities for layout/spacing, custom classes for typography/animation
- CSS custom properties referenced as `var(--color-*)` in Tailwind arbitrary values: `text-[var(--color-text-muted)]`
- Fonts: General Sans (self-hosted, display/body), Geist Mono (Google, mono), Instrument Serif (Google, accents)

### GSAP
- Always register plugins: `gsap.registerPlugin(ScrollTrigger, SplitText, ...)`
- Store all `ScrollTrigger` instances for cleanup
- SplitText must be `.revert()`ed on cleanup
- Lenis↔GSAP bridge lives in `Page.astro` (ticker callback stored for removal)

### Three.js
- Use named imports: `import { Scene, PerspectiveCamera, ... } from 'three'`
- NOT `import * as THREE from 'three'` (breaks tree-shaking)

### Performance
- `compressHTML: true` in Astro config
- Font preloading for self-hosted General Sans
- Google Fonts loaded async via `media="print"` + `onload` swap
- Unicorn Studio SDK loaded with `defer`
- Preloader shows once per session (localStorage flag `preloaded`)

## Design & Creative Direction

### Always Use the Frontend Design Skill
When building new components, sections, pages, or any visual UI — **always invoke the `/frontend-design` skill**. This ensures output meets a high design bar and avoids generic AI aesthetics.

### Design References
Our primary design inspirations:
- **Locomotive.ca** (https://locomotive.ca/en) — editorial pacing, bold typography, refined scroll interactions, restrained color palette
- **Obys Agency** (https://obys.agency/) — typographic experimentation, dramatic transitions, dark/light contrast, creative use of whitespace

Aim for that same level of craft: intentional motion, strong type hierarchy, considered negative space, and a premium editorial feel.

### Stick to Existing Styles
- Use **only** the fonts already in the project: General Sans (display/body), Geist Mono (mono), Instrument Serif (serif accents)
- Use **only** the existing color tokens and design tokens from `global.css` `@theme { }`
- Use the existing typography utility classes (`.text-display-xl`, `.text-mono-sm`, etc.)
- Do NOT introduce new fonts, color palettes, or design systems — build on what's there

## Do NOT
- Create new pages or routes without discussion
- Add new npm dependencies without asking
- Use `import * as THREE` — always named imports
- Skip the cleanup pattern in component scripts
- Put translatable strings directly in templates — use `translations.ts`
- Add unused CSS tokens, classes, or exports (project was recently cleaned)
- Introduce new fonts or color tokens — use the existing design system
- Build UI without invoking the `/frontend-design` skill
