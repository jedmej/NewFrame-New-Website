# CLAUDE.md — Newframe Studio

## Project Overview
Newframe is Jed Mejzner's portfolio/agency website for a web design studio. Single-page site with animated sections, bilingual (EN/PL), heavy use of scroll-driven animations and WebGL effects.

## Tech Stack
- **Framework:** Astro 5 with View Transitions (`ClientRouter`), `@astrojs/sitemap`
- **Styling:** Tailwind CSS v4 (Vite plugin, `@theme` tokens in `src/styles/global.css`)
- **Animation:** GSAP 3 (ScrollTrigger, SplitText, ScrambleTextPlugin)
- **Smooth scroll:** Lenis (desktop only, >=1024px)
- **WebGL effects:** two shader systems, both lazy-loaded:
  - `shaders` npm package — dynamically imported via `import('shaders/js')` in `WorkSelectedCards.astro`
  - `@paper-design/shaders` — vanilla `ShaderMount` (uses vanilla mount, not React), wrapped in `src/scripts/neuroSectionShader.ts` (neuro-noise background, used by `OfferProcessBand`)
- **Fonts:** Nohemi only — self-hosted woff2, weights 200–700 (`public/fonts/nohemi/`)
- **TypeScript:** Strict mode (`astro/tsconfigs/strict`)
- **Dev-only tooling (NOT shipped to production):** React + `@astrojs/react` + `dialkit` + `motion` power the DialKit typography tuner (`src/components/dev/DialKitPanel.tsx`). The React integration is registered only when `NODE_ENV !== 'production'` (see `astro.config.mjs`), and the island is dynamically imported only under `import.meta.env.DEV` (see `Page.astro`), so no React/DialKit code is in the production build (verified: `dist/` contains zero React). Production runtime stays React-free — do NOT use React for any user-facing/shipped component.
- **NOT in this project:** Three.js, Unicorn Studio, Google Fonts — all removed; do not reintroduce them

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── assets/
│   └── work/          # Work card source .avif images (served via astro:assets <Image>)
├── components/
│   ├── global/        # Nav, Footer, CustomCursor, Preloader, ViewportProgressiveBlur
│   ├── sections/      # Hero, About, WorkSelectedCards, WaysToWorkPaperRows,
│   │                  # Testimonials, OfferProcessBand
│   └── dev/           # DEV-ONLY (excluded from prod): DialKitPanel.tsx (React
│                      # DialKit typography tuner) + DialKitDev.astro island wrapper
├── i18n/
│   └── translations.ts  # All EN/PL strings, getLangFromUrl(), useTranslations()
├── layouts/
│   ├── Base.astro     # HTML shell, font preloads, SEO/OG meta, hreflang, ClientRouter
│   └── Page.astro     # Wraps Base + Nav/Footer/Preloader/Cursor + Lenis init
├── lib/
│   └── workSelectedCardAssets.ts  # Work card image/asset data
├── pages/
│   ├── index.astro    # Root redirect
│   ├── 404.astro
│   ├── en/            # index.astro, privacy.astro
│   └── pl/            # index.astro, privacy.astro
├── scripts/
│   └── neuroSectionShader.ts        # @paper-design/shaders neuro-noise wrapper
└── styles/
    └── global.css     # Tailwind v4 import, @theme tokens, font-faces, utilities
public/
├── _headers           # Cloudflare security (CSP) + cache headers
├── _redirects         # Cloudflare redirect: / → /en/ (301)
├── fonts/nohemi/      # Nohemi woff2 (ExtraLight→Bold, 200–700)
└── favicon.svg, og-image.jpg, robots.txt
```

### Section Composition
`OfferProcessBand.astro` is the page-level composition: it renders Hero, About, WorkSelectedCards, WaysToWorkPaperRows, Testimonials, and Footer inside a shared neuro-noise shader background band. The EN/PL homepages render only `<OfferProcessBand lang=... />` (with `showFooter={false}` on `Page`, since the band includes its own Footer).

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
- Typography utilities as plain CSS classes: `.text-display-xl`, `.text-display-lg`, `.text-serif-display`, `.text-mono-xs`, `.text-body`
- Use Tailwind utilities for layout/spacing, custom classes for typography/animation
- CSS custom properties referenced as `var(--color-*)` in Tailwind arbitrary values: `text-[var(--color-text-muted)]`
- Fonts: Nohemi only (self-hosted) — all font tokens (`--font-display`, `--font-body`, `--font-mono`, `--font-serif`) resolve to Nohemi; hierarchy comes from weight (200–700), size, and letter-spacing, not family

### GSAP
- Always register plugins: `gsap.registerPlugin(ScrollTrigger, SplitText, ...)`
- Store all `ScrollTrigger` instances for cleanup
- SplitText must be `.revert()`ed on cleanup
- Lenis↔GSAP bridge lives in `Page.astro` (ticker callback stored for removal)

### Shaders
- Both shader systems are lazy-loaded via dynamic `import()` — never import them statically at module top level in component scripts
- `shaders/js` module is cached in a module-level promise (`shaderModulePromise ??= import('shaders/js')`) and warmed before interaction where needed — keep this pattern
- `@paper-design/shaders` wrappers in `src/scripts/` return a handle with a dispose method; mount lazily and dispose in the cleanup function
- Respect `prefers-reduced-motion` — skip mounting shaders when set
- The CSP in `public/_headers` allowlists `https://data.shaders.com` (shader assets) — keep in sync if shader sources change

### Performance
- `compressHTML: true` in Astro config
- Self-hosted Nohemi with `<link rel="preload">` for Light/SemiBold/Bold in `Base.astro`; no external font requests
- Shader modules loaded on demand (dynamic import + intersection/intent triggers), never in the critical path
- Preloader shows once per session (localStorage flag `preloaded`)
- Long-lived cache headers for `/_astro/*` and fonts in `public/_headers`
- Work images live in `src/assets/work/` and go through `astro:assets` `<Image>` (responsive srcset, AVIF output, intrinsic width/height); a custom `modulePreloadHints` integration in `astro.config.mjs` injects `<link rel="modulepreload">` for shared JS chunks at build time

## Design & Creative Direction

### Always Use the Frontend Design Skill
When building new components, sections, pages, or any visual UI — **always invoke the `/frontend-design` skill**. This ensures output meets a high design bar and avoids generic AI aesthetics.

### Design References
Our primary design inspirations:
- **Locomotive.ca** (https://locomotive.ca/en) — editorial pacing, bold typography, refined scroll interactions, restrained color palette
- **Obys Agency** (https://obys.agency/) — typographic experimentation, dramatic transitions, dark/light contrast, creative use of whitespace

Aim for that same level of craft: intentional motion, strong type hierarchy, considered negative space, and a premium editorial feel.

### Stick to Existing Styles
- Use **only** the font already in the project: Nohemi (all roles — vary weight, not family)
- Use **only** the existing color tokens and design tokens from `global.css` `@theme { }`
- Use the existing typography utility classes (`.text-display-xl`, `.text-mono-xs`, etc.)
- Do NOT introduce new fonts, color palettes, or design systems — build on what's there

## Do NOT
- Create new pages or routes without discussion
- Add new npm dependencies without asking
- Import shader packages statically — always lazy `import()` (see Shaders section)
- Skip the cleanup pattern in component scripts
- Put translatable strings directly in templates — use `translations.ts`
- Add unused CSS tokens, classes, or exports (project was recently cleaned)
- Introduce new fonts or color tokens — use the existing design system
- Build UI without invoking the `/frontend-design` skill
