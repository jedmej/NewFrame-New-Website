# Newframe Studio: Design Critique Synthesis & Action Plan

Compiled from independent reviews by **Locomotive** (Montreal), **Studio Dialect**, and **Obys Agency** (Kyiv).

---

## 1. Executive Summary

### The Consensus

All three studios agree on the core diagnosis: the technical foundation is strong, but the site reads as a developer's portfolio rather than a design studio's statement piece. The engineering discipline (cleanup patterns, GSAP management, accessibility, i18n) is well above average. The design, however, defaults to safe choices and predictable rhythms where it should take risks and demonstrate taste.

Three issues surfaced independently from every reviewer:

1. **Click confetti must go.** It actively undermines the premium positioning the rest of the site works hard to establish.
2. **Stock photography is a credibility killer.** Three of five project images are Unsplash placeholders. A portfolio site with placeholder work is a contradiction.
3. **The scroll experience is monotonous.** Every section follows the same formula (mono label, divider line, content fade-up) with no tonal shift, no color change, and no variation in pacing.

### Where They Differ

- **Section order:** Locomotive wants Work immediately after Hero; Dialect defends the current funnel (Hero, About, Services, Work, Testimonials); Obys is agnostic on order but demands each section feel like a distinct chapter.
- **3D Carousel:** Locomotive wants it replaced with flat, full-width project showcases. Dialect wants a simpler horizontal scroll. Obys would keep 3D only if paired with real project imagery and a dark background.
- **Font count:** Dialect suggests reducing to one font family. Locomotive and Obys are fine with the three-font stack but want more typographic collision between them.

---

## 2. Consensus Issues (Flagged by All Three Studios)

These are non-negotiable. Every reviewer independently identified them.

| # | Issue | Severity | Files Affected |
|---|-------|----------|----------------|
| C1 | Click confetti on every click conflicts with premium editorial positioning | Critical | `src/components/global/CustomCursor.astro` (lines 118-178) |
| C2 | Stock Unsplash images (3 of 5 projects) fundamentally undermine portfolio credibility | Critical | `src/lib/projects.ts` (lines 11, 18, 29, 35) |
| C3 | Entire site is one unbroken field of `#f0ede8` with no tonal shift until the abrupt red footer | High | All section components: `style="background-color: var(--color-bg);"` |
| C4 | ScrambleText used everywhere (nav, services, footer) stops being a signature and becomes noise | High | `Nav.astro` (line 138-146), `Services.astro` (line 418-423), `Footer.astro` (line 258-268) |
| C5 | Every section opens identically: `text-mono-xs` label + `h-px` divider + content. No rhythm variation | Medium | `About.astro` (line 22-24), `Services.astro` (line 20-23), `WorkCarousel.astro` (line 28-33), `Testimonials.astro` (line 27-35) |
| C6 | Service title `clamp(1.5rem, 1.8vw, 1.5rem)` has identical min/max -- titles never scale | Bug | `Services.astro` style block (line 158) |
| C7 | `services-cta-text` clamp `clamp(1.75rem, 2vw, 1.75rem)` also has identical min/max | Bug | `Services.astro` style block (line 208) |
| C8 | Hardcoded `text-[#0A0A0A]` in section labels bypasses the token system | Low | `Services.astro` (line 21), `About.astro` (line 23), `WorkCarousel.astro` (line 29), `Testimonials.astro` (line 29) |

---

## 3. The Holistic Plan

### Phase 1: Immediate Fixes (Day 1 -- Highest Impact-to-Effort)

These require minimal structural changes but dramatically improve perception.

#### 1.1 Remove Click Confetti
**Files:** `src/components/global/CustomCursor.astro`
**Action:** Delete the `createConfetti` function (lines 141-178) and the click event listener that invokes it (lines 119-127). Remove the cleanup line that removes `.confetti-particle` elements (line 134).
**Why:** All three studios flagged this as actively harmful to premium positioning. Locomotive ranked it #1, Dialect ranked it #1-tied, Obys filed it under "commit to it or remove it (remove it)."

#### 1.2 Fix Broken Clamp Values in Services
**File:** `src/components/sections/Services.astro`
**Action:**
- Line 158: Change `.service-title` `font-size` from `clamp(1.5rem, 1.8vw, 1.5rem)` to `clamp(1.5rem, 1.8vw, 2rem)` -- allows titles to grow on wide screens.
- Line 208: Change `.services-cta-text` `font-size` from `clamp(1.75rem, 2vw, 1.75rem)` to `clamp(1.75rem, 3vw, 2.5rem)`.
**Why:** Locomotive, Dialect, and Obys all identified these as bugs. Obys noted service titles "NEVER GROW past 1.5rem."

#### 1.3 Replace Hardcoded Hex Colors with Tokens
**Files:** `Services.astro` (line 21), `About.astro` (line 23), `WorkCarousel.astro` (line 29), `Testimonials.astro` (line 29)
**Action:** Replace all instances of `text-[#0A0A0A]` with `text-[var(--color-text)]`.
**Why:** Locomotive flagged this as bypassing the token system. Small change, zero risk.

#### 1.4 Reduce ScrambleText to a Single Signature Location
**Files:** `Nav.astro`, `Services.astro`, `Footer.astro`
**Action:** Keep ScrambleText only on the Nav links (strongest context: it signals interactivity at the site's persistent UI layer). Remove it from:
- `Services.astro` lines 412-424 (service row hover) -- replace with a simple CSS color transition, which already exists via `.service-row:hover .service-title { color: var(--color-accent); }`
- `Footer.astro` lines 258-268 (footer link hover) -- the expand-line hover animation is sufficient.
**Why:** All three studios agreed: when every text element scrambles, it stops being distinctive. Locomotive: "ScrambleText on everything stops being signature." Dialect: "every instance uses identical parameters -- no nuance."

#### 1.5 Replace Green Availability Dot with Accent Color
**File:** `src/components/sections/Hero.astro`
**Action:** Line 36: Change `bg-green-400` to `bg-[var(--color-accent)]`. The pulse animation can remain.
**Why:** Locomotive flagged `bg-green-400` as breaking the palette. The accent red is already the site's signal color. The Footer already uses a white dot for the same purpose (line 25 of Footer.astro), so this also improves consistency.

#### 1.6 Increase Testimonial Background Number Opacity
**File:** `src/components/sections/Testimonials.astro`
**Action:** Line 45: Change `-webkit-text-stroke: 1px var(--color-text-faint);` to `-webkit-text-stroke: 2px rgba(10,10,10,0.12);`. The current `--color-text-faint` is `rgba(10,10,10,0.06)` which barely registers.
**Why:** Obys recommended minimum 8-10% opacity, ideally 12%. Dialect suggested adding hover parallax to it (Phase 3).

---

### Phase 2: Design Elevation (Days 2-3 -- Structural Changes)

These change the visual architecture of the site.

#### 2.1 Introduce a Dark Section for Work
**File:** `src/components/sections/WorkCarousel.astro`
**Action:** Change line 24 from `style="background-color: var(--color-bg);"` to a dark background. Add a new CSS custom property `--color-bg-dark: #0a0a0a;` to `src/styles/global.css` under `@theme`. Set the Work section background to `var(--color-bg-dark)`. Update text colors within the section to use white/light variants. Update the top/bottom gradient overlays (lines 39, 79) to use the dark color instead of `var(--color-bg)`.

The project name overlay (line 72) already uses `mix-blend-mode: difference` and white text, so it will work naturally against a dark background. The counter (line 30) needs its color updated to a light variant.

**Why:** All three studios demanded tonal variation. Obys: "Work section especially needs dark bg -- project imagery looks dramatically better against it." Locomotive: "Introduce a dark section break." Dialect: "Introduce transitional section/visual bridge."

#### 2.2 Smooth the Footer Color Transition
**File:** `src/components/global/Footer.astro`
**Action:** Add a transitional gradient element before the footer's red section. Between the Testimonials section and the footer, add a `<div>` with a gradient from `var(--color-bg)` to `#DA382E` spanning approximately 15-20vh. This can be placed at the very top of the footer component, before the existing `<div style="background-color: #DA382E;">` wrapper.
**Why:** Dialect ranked this high priority: "Footer color transition is abrupt -- no preparation for the viewer." Locomotive also noted "Only color shift is the abrupt footer red."

#### 2.3 Improve Type Hierarchy in Services
**File:** `src/components/sections/Services.astro`
**Action:**
- Increase `.service-category` font-size (line 129) from `clamp(1.75rem, 2.5vw, 2.25rem)` to `clamp(2rem, 4vw, 3rem)`. Obys specifically recommended "minimum 4vw" for category headings.
- Increase the differentiation between category and item sizes. Currently categories are ~2.25rem max and items are ~1.5rem (broken clamp) -- only 0.75rem difference. After fix: categories at 3rem and items at 2rem gives 1rem of clear hierarchy.
**Why:** Locomotive: "Type hierarchy COLLAPSES outside the hero. Services category headings vs service titles differ by only ~0.75rem."

#### 2.4 Add Responsive Letter-Spacing to `text-display-xl`
**File:** `src/styles/global.css`
**Action:** The current `letter-spacing: -0.06em` (line 114) is fixed. At mobile sizes (3.75rem), -0.06em is already tight. At 14rem, it is extremely tight. Use a CSS clamp or media query approach:
```css
.text-display-xl {
  letter-spacing: clamp(-0.06em, -0.02em + -0.5vw, -0.03em);
}
```
Or use a simpler media query: at screens below 768px, set `letter-spacing: -0.03em`.
**Why:** Dialect: "letter-spacing should be responsive, not fixed at -0.06em across that range (too tight at mobile)."

#### 2.5 Consolidate `text-mono-xs` and `text-mono-sm`
**File:** `src/styles/global.css`
**Action:** The two classes differ by only 0.05rem (0.75rem vs 0.8rem) and have different letter-spacing (0.15em vs 0.1em). Consolidate to a single `.text-mono` utility at 0.75rem with 0.12em letter-spacing. Update all usages across components.

Current usage:
- `text-mono-xs`: Section labels, nav links, footer labels, hero corners, preloader
- `text-mono-sm`: Nav links, footer column headers

**Why:** Dialect: "text-mono-xs (0.75rem) and text-mono-sm (0.8rem) differ by imperceptible 0.05rem -- consolidate."

#### 2.6 Add a Proper Body Text Utility Class
**File:** `src/styles/global.css`
**Action:** Add a `.text-body` class:
```css
.text-body {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.65;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
}
```
Then replace the inline styles on the About body text (`About.astro` line 73):
```
style="font-family: var(--font-mono); color: var(--color-text-muted); letter-spacing: 0.02em; max-width: 420px;"
```
with the utility class.
**Why:** Dialect: "No body text class defined -- About uses inline styles." Locomotive: "Add General Sans Regular (400) weight for proper body text." The mono approach works for the current aesthetic, but it should be codified as a reusable class regardless.

#### 2.7 Vary Section Opening Patterns
**Files:** All section components
**Action:** Not every section needs the identical mono-label + divider formula. Suggestions:
- **About:** Remove the top divider. Let the manifesto text lead without preamble. The section already has a `border-t` on the section element itself.
- **Work (dark section):** Use a large, faded section number (like Testimonials' background number) instead of the small mono label. Or use the label but in a contrasting color against the dark bg.
- **Testimonials:** Keep the current format (it works well with the sticky header during scroll).
- **Services:** Keep but increase the label's visual weight slightly -- perhaps use `text-mono-sm` (or the consolidated size) with `text-[var(--color-text-muted)]` instead of full black.
**Why:** All three studios flagged the repetitive section opening. Locomotive: "Every section opens identically." Dialect: "Vary section label pattern." Obys: "Predictable rhythm -- every section same cadence."

---

### Phase 3: Motion Refinement (Days 4-5 -- Animation Choreography)

#### 3.1 Simplify Hero Scroll Animation
**File:** `src/components/sections/Hero.astro`
**Action:** The hero currently has 4 simultaneous scroll effects:
1. Character spread (x offset per char, lines 101-114)
2. Corner drift (y: -24, opacity: 0.6, lines 117-129)
3. Velocity skew (skewY quickTo, lines 131-141)
4. Fade + scale (opacity: 0, scale: 0.98, lines 143-153)

Keep only #4 (fade + scale) and #2 (corner drift). Remove the character spread (#1) and the velocity skew (#3). The fade-out is the most essential for the transition to the next section. The character spread at only 6px per character on 14rem text is "barely perceptible" (Obys) and the skew adds complexity without payoff.
**Why:** Locomotive: "Hero animation overcooked (4 simultaneous scroll effects -- pick one)." Obys: "hero scroll dispersal barely perceptible (24px spread on 14rem text = invisible)."

#### 3.2 Improve Services Entrance Animation
**File:** `src/components/sections/Services.astro`
**Action:** Replace the generic `{ opacity: 0, y: 20 }` fade-up on service rows (lines 308-329) with a more distinctive entrance. Options:
- Clip-path reveal from left to right on each row (matches the line-draw animation already present)
- Staggered x-translation from the right (matching the right-aligned layout)
- Simply increase the y-offset to 40px and add a slight rotation for more drama
**Why:** Obys: "Services uses most generic animation possible (opacity 0, y 20 -- every Squarespace does this)." Dialect concurred that the animations lack nuance.

#### 3.3 Add Section-to-Section Transitions
**Files:** All section components, or centralize in `Page.astro`
**Action:** Add ScrollTrigger-driven transitions between sections. For example:
- As About scrolls out and Services scrolls in, the divider line between them could draw across
- The dark Work section could have its background revealed via a clip-path wipe as the user scrolls into it
- Between Testimonials and Footer, a color blend transition

These can be implemented as standalone ScrollTrigger instances in `Page.astro` since they span multiple sections.
**Why:** Obys: "No section-to-section transitions." Locomotive wanted "rhythm of tension and release."

#### 3.4 Reduce Carousel Scroll Distance
**File:** `src/components/sections/WorkCarousel.astro`
**Action:** Line 36: Change `h-[500vh]` to `h-[350vh]`. The current 500vh means ~5 full viewport heights of scrolling for 5 projects. At 350vh, each project gets ~70vh of scroll, which is still generous but doesn't trap the user in WebGL for as long.
**Why:** Dialect: "3D carousel occupies 500vh for 5 projects -- disproportionate." Locomotive also noted the scroll time was excessive.

#### 3.5 Increase Lenis Lerp for Snappier Feel
**File:** `src/layouts/Page.astro`
**Action:** Line 60: Change `lerp: 0.085` to `lerp: 0.11`. This makes the smooth scroll feel slightly snappier and more responsive without losing the premium feel.
**Why:** Obys: "Increase Lenis lerp from 0.085 to ~0.12 for snappier feel." A value of 0.11 is a moderate compromise.

---

### Phase 4: Bold Moves (Optional -- Award-Level Ambition)

These are high-effort, high-reward changes that push the site from "competent" to "remarkable."

#### 4.1 Replace Stock Photos with Real Project Screenshots
**File:** `src/lib/projects.ts`
**Action:** Replace all Unsplash URLs with actual screenshots or stylized mockups of real projects. The three Unsplash images are:
- Line 11: `photo-1634017839464` (UROKI TATTOO -- use a real screenshot of urokitattoo.pl)
- Line 18: `photo-1558618666` (PANENKA CREATIVES -- use a real screenshot)
- Line 29: `photo-1618005182384` (ADFIDENCE -- use a real screenshot of adfidence.com)
- Line 35: `photo-1550745165` (PHOTO STUDY -- if this is not a real project, remove it entirely)

Consider reducing to 3-4 strong real projects rather than 5 with filler.
**Why:** Every studio flagged this. Obys: "NEVER launch with placeholder images." Dialect: "THREE of FIVE project images are Unsplash stock photos -- fundamentally undermines credibility." This is arguably the single most important change on the entire list.

#### 4.2 Replace 3D Carousel with Flat Project Showcase (Alternative to 4.1)
**File:** `src/components/sections/WorkCarousel.astro` (full rewrite)
**Action:** If the decision is made to move away from the 3D carousel, replace it with either:
- **Full-width stacked projects** (Locomotive's preference): Each project gets a full-width row with large image, project name at display scale, and category label. Scroll-driven parallax on images.
- **Horizontal scroll of large thumbnails** (Dialect's preference): A horizontally-scrolling strip of project cards, each ~60vw wide, with GSAP-driven horizontal scroll pinning.

The 3D carousel is the most technically ambitious element, but all three studios questioned whether it serves the design. The disconnect between the flat/typographic design language and the 3D WebGL element was noted by Locomotive.
**Why:** Locomotive: "3D carousel ambitious but disconnected from flat/typographic design language." Dialect: "Replace with simple horizontal scroll." Obys would keep it only with real imagery and dark background.

#### 4.3 Reorder Sections: Hero, Work, Services, About, Testimonials
**Files:** `src/pages/en/index.astro`, `src/pages/pl/index.astro`
**Action:** Change the component order from:
```
<Hero /> <About /> <Services /> <WorkCarousel /> <Testimonials />
```
to:
```
<Hero /> <WorkCarousel /> <Services /> <About /> <Testimonials />
```
This puts proof (work) before claims (about/services).
**Why:** Locomotive: "About section before Work = asking visitor to read manifesto before seeing any proof." Obys: "Lead with work, not name." Dialect defended the current order as a funnel, which is the dissenting view addressed in Section 5.

#### 4.4 Break the Hero Composition
**File:** `src/components/sections/Hero.astro`
**Action:** Currently "NEW FRAME" is centered, single-line, vanilla. Consider:
- Splitting "NEW" and "FRAME" onto separate lines with different alignment (left/right)
- Adding a diagonal tension between the two words
- Letting the subtitle/descriptor interact with the title at a different visual weight
- Using the serif font for one word and sans for the other

This is the most subjective recommendation and should be prototyped carefully.
**Why:** Obys: "No compositional tension, no typographic counterpoint. Usage is vanilla -- 'NEW FRAME' centered, nothing else."

#### 4.5 Auto-Detect Language Instead of Preloader Picker
**File:** `src/components/global/Preloader.astro`
**Action:** Use `navigator.language` to auto-detect and redirect to the appropriate locale on first visit. The preloader language picker adds a barrier to entry. Keep the language switch in the nav for manual override.
**Why:** Obys: "Auto-detect language instead of preloader picker barrier." This removes friction from the first-visit experience.

#### 4.6 Design the Fold as a Complete Composition
**File:** `src/components/sections/Hero.astro`
**Action:** Ensure the hero section, before any scroll occurs, reads as a complete, resolved visual composition. Currently the corner metadata (availability, location, descriptor, credit) provides structure, but the space between the title and the corners is undifferentiated. Consider:
- A subtle horizontal rule between the title and corner metadata
- A decorative element (the Newframe bracket icon, very large and faded) behind the title
- Ensuring the fold works at common viewport heights (900px, 800px, 700px)
**Why:** Obys: "Design for the fold as complete composition."

---

## 4. Per-Component Action Items

### `src/styles/global.css`
| Action | Source | Phase |
|--------|--------|-------|
| Add `--color-bg-dark: #0a0a0a` and `--color-text-light: #ffffff` tokens to `@theme` | Obys, Locomotive | 2 |
| Make `text-display-xl` letter-spacing responsive (currently fixed `-0.06em`) | Dialect | 2 |
| Consolidate `text-mono-xs` and `text-mono-sm` into single utility | Dialect | 2 |
| Add `.text-body` utility class for body text | Dialect | 2 |
| Consider adding General Sans Regular (400) weight font-face | Locomotive | 4 |

### `src/components/sections/Hero.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Replace `bg-green-400` availability dot with `bg-[var(--color-accent)]` (line 36) | Locomotive | 1 |
| Remove char-spread scroll animation (lines 101-114) and velocity skew (lines 131-141) | Locomotive, Obys | 3 |
| Keep only fade+scale and corner drift scroll animations | All | 3 |
| Optionally: break hero composition with typographic tension | Obys | 4 |
| Optionally: design fold as complete composition | Obys | 4 |

### `src/components/sections/About.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Replace `text-[#0A0A0A]` with `text-[var(--color-text)]` (line 23) | Locomotive | 1 |
| Replace inline styles on body text (line 73) with `.text-body` utility | Dialect | 2 |
| Remove the section label top divider; let manifesto lead | Dialect, Obys | 2 |

### `src/components/sections/Services.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Fix `.service-title` clamp: `clamp(1.5rem, 1.8vw, 2rem)` (line 158) | All | 1 |
| Fix `.services-cta-text` clamp: `clamp(1.75rem, 3vw, 2.5rem)` (line 208) | All | 1 |
| Replace `text-[#0A0A0A]` with `text-[var(--color-text)]` (line 21) | Locomotive | 1 |
| Remove ScrambleText on service row hover (lines 412-424) | All | 1 |
| Increase `.service-category` size to `clamp(2rem, 4vw, 3rem)` (line 129) | Locomotive, Obys | 2 |
| Replace generic `{ opacity: 0, y: 20 }` entrance with more distinctive animation | Obys | 3 |

### `src/components/sections/WorkCarousel.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Replace `text-[#0A0A0A]` with `text-[var(--color-text)]` (line 29) | Locomotive | 1 |
| Add dark background (`--color-bg-dark`) to section | All | 2 |
| Update gradient overlays to match dark background (lines 39, 79) | -- | 2 |
| Update text colors for dark context (counter, labels) | -- | 2 |
| Reduce scroll height from `h-[500vh]` to `h-[350vh]` (line 36) | Dialect, Obys | 3 |
| Optionally: replace 3D carousel with flat showcase or horizontal scroll | Locomotive, Dialect | 4 |

### `src/components/sections/Testimonials.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Replace `text-[#0A0A0A]` with `text-[var(--color-text)]` (line 29) | Locomotive | 1 |
| Increase background number opacity from 6% to 12% (line 45) | Obys | 1 |
| Optionally: add hover parallax to background number | Dialect | 3 |

### `src/components/global/CustomCursor.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Delete `createConfetti` function (lines 141-178) | All | 1 |
| Delete click event listener for confetti (lines 119-127) | All | 1 |
| Remove `.confetti-particle` cleanup from cleanupFn (line 134) | All | 1 |

### `src/components/global/Nav.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Keep ScrambleText here (this is the single signature location) | Locomotive, Dialect | 1 |
| Optionally: make nav more distinctive (Obys) | Obys | 4 |

### `src/components/global/Footer.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Remove ScrambleText on footer link hover (lines 258-268) | All | 1 |
| Add transitional gradient from `var(--color-bg)` to `#DA382E` at top of footer | Dialect | 2 |

### `src/components/global/Preloader.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Optionally: auto-detect language via `navigator.language` | Obys | 4 |

### `src/layouts/Page.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Increase Lenis `lerp` from `0.085` to `0.11` (line 60) | Obys | 3 |
| Optionally: add section-to-section ScrollTrigger transitions | Obys | 3 |

### `src/pages/en/index.astro` and `src/pages/pl/index.astro`
| Action | Source | Phase |
|--------|--------|-------|
| Optionally: reorder sections to Hero, Work, Services, About, Testimonials | Locomotive, Obys | 4 |

### `src/lib/projects.ts`
| Action | Source | Phase |
|--------|--------|-------|
| Replace all Unsplash URLs with real project screenshots | All | 4 (but arguably the single most important change) |
| Consider removing PHOTO STUDY if it is not a real project | All | 4 |

---

## 5. Dissenting Opinions & Recommended Resolutions

### Section Order
- **Locomotive** and **Obys** want Work right after Hero (proof before claims).
- **Dialect** defends the current Hero > About > Services > Work > Testimonials order as a strategic funnel.
- **Resolution:** Move Work to second position. The current About-first approach asks visitors to invest in a manifesto before seeing evidence. Work creates credibility that makes everything after it more persuasive. The funnel argument works for SaaS landing pages, not portfolio sites where the work IS the product.

### The 3D Carousel
- **Locomotive** wants it replaced entirely with flat, full-width project moments.
- **Dialect** wants a simpler horizontal scroll.
- **Obys** would keep it if paired with real imagery and a dark background.
- **Resolution:** Keep the 3D carousel for now, but implement it on a dark background (Phase 2) with real project imagery (Phase 4). If after those changes it still feels disconnected from the site's typographic identity, replace it. The carousel is the site's most technically distinctive element -- throwing it away prematurely loses a differentiator. But it MUST have real images to justify its existence.

### Font Count
- **Dialect** suggests reducing to one font family.
- **Locomotive** and **Obys** are fine with three but want more typographic collision.
- **Resolution:** Keep the three-font stack (General Sans, Instrument Serif, Geist Mono). The triad is well-chosen. The problem is not the number of fonts but how they are deployed -- currently they exist in separate zones and never collide in the same visual space (Obys). Look for opportunities to set serif and sans at the same scale in adjacent elements (e.g., a serif category heading next to sans service items, which already partially exists in Services).

### Hero Composition
- **Obys** wants the hero fundamentally broken apart (split words, diagonal tension, parallax between elements).
- **Locomotive** wants it simplified (fewer scroll effects).
- **Dialect** wants responsive letter-spacing but otherwise finds it effective.
- **Resolution:** Start with Locomotive's simplification (Phase 3 -- remove excess scroll effects). Then, if the hero still feels generic, explore Obys's compositional suggestions in Phase 4. The current centered single-line approach is safe but not memorable.

---

## 6. Design Principles Going Forward

Distilled from the combined wisdom of all three studios.

### 1. Motion is a Material, Not a Decoration
Every animation should have a reason. If it does not guide the eye, reveal hierarchy, or create anticipation, remove it. The About word-by-word reveal works because it paces comprehension. The click confetti does not work because it adds noise to every interaction indiscriminately.

### 2. Silence is a Design Choice
Empty space, pauses in scroll, and sections without animation are not gaps -- they are deliberate choices that create rhythm. The site currently fills every moment with something (confetti, scramble, parallax, WebGL). Learning when NOT to animate is the mark of a mature design practice.

### 3. The Site IS the First Case Study
A portfolio site with placeholder images and safe design choices communicates that the studio produces placeholder work and safe designs. Every pixel of this site should demonstrate the level of craft a client can expect. Stock imagery is an existential contradiction.

### 4. Color is Narrative, Not Utility
The warm cream background is a strong foundation, but it cannot be the only note. Use color shifts to signal chapter changes (cream for introduction, dark for work, red for call-to-action). The viewer should feel the story progressing through tonal changes.

### 5. Typography Creates Hierarchy Without Help
If a layout needs animation to communicate hierarchy, the typography has failed. Service categories and service items should have visually obvious scale differences at rest. Section headings and body text should read clearly in a static screenshot. Animation should enhance hierarchy that already exists, not create it.

### 6. One Signature Interaction, Done Well
Choose one distinctive interaction pattern and make it the site's signature (the MorphSVG CTA is the strongest candidate). Apply it consistently at key decision points. Everything else should be clean, standard, and subordinate. Currently, the site has too many "signature" moments competing for attention (confetti, scramble, 3D carousel, WebGL shader, morphing SVG, magnetic cursor, parallax).

### 7. Iterate Through Subtraction
Before adding any new feature, interaction, or visual element, audit what can be removed. The strongest version of this site is likely 60% of the current animation surface area, executed with twice the compositional rigor.
