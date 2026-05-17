# Newframe Homepage Clarity Expansion Design

Date: 2026-05-04
Project: Newframe Studio website
Source of truth: `/Users/jed/Downloads/NEWFRAME_WEBSITE_IMPLEMENTATION_PLAN.md`

## Goal

Expand the existing Newframe homepage so it communicates the offer more clearly without turning the site into an aggressive sales landing page.

The site should keep its premium, editorial, founder-led design language while helping a potential client understand, within roughly 30 seconds:

- what Newframe does,
- who it is for,
- what kinds of projects can be bought,
- how collaboration works,
- what the first step is.

The implementation plan document remains the primary source of truth. This spec captures the agreed implementation constraints and decisions from the planning conversation.

## Non-Goals

- No complete redesign.
- No new pages or routes.
- No public pricing table.
- No contact form in this pass.
- No phone number in this pass.
- No new fonts, color palettes, or design system.
- No major redesign of the recently updated Selected Work section.
- No hardcoded user-facing copy in Astro templates.

## Visual Direction

This is a content and clarity expansion inside the existing Newframe visual language.

New sections must feel like native parts of the current site. They should reuse the established design ingredients:

- mono section labels,
- thin divider lines,
- large editorial serif/display typography,
- restrained color tokens from `src/styles/global.css`,
- generous negative space,
- subtle GSAP entrance or scroll motion where useful,
- the existing premium, calm, typographic pacing.

New components must not introduce landing-page card clutter, a new palette, decorative effects unrelated to the current site, or visual patterns that feel detached from the existing homepage.

## Language And Copy

The Polish version is the editorial baseline for this pass, but the English version must be maintained technically at the same time.

Polish and English copy should preserve the same message and positioning, but they do not need to be literal translations. Each language should be written naturally for its own rhythm and market. Avoid direct word-for-word translation when it weakens tone.

All user-facing strings must live in `src/i18n/translations.ts`. Components receive `lang` and render translated data.

The tone should stay:

- calm,
- specific,
- confident,
- human,
- premium,
- slightly editorial.

Avoid generic agency or AI-growth language.

## Homepage Structure

The homepage should follow the structure from the implementation plan:

1. Hero
2. About / Founder
3. Selected Work
4. Ways to Work
5. Scope / Outcomes
6. Process
7. Testimonials
8. Contact / Footer

This sequence should be implemented for both `/pl/` and `/en/`.

## Section Designs

### Hero

The hero should become clearer without losing the current visual strength of the `NEW FRAME` wordmark.

Design direction:

- Keep the existing hero atmosphere, scale, and motion language.
- Add a clear value proposition, subcopy, and two CTAs.
- The value proposition should read as an editorial statement, not a SaaS-style headline.
- Primary CTA should lead toward contact with a soft, specific action such as sending the current site.
- Secondary CTA should lead to work.

The final implementation should avoid replacing the whole hero with a generic landing hero.

### About / Founder

The founder section should stay human and premium, but become more useful to a potential client.

It should clarify:

- who Jed is,
- what Newframe helps with,
- the relationship between craft, first impression, and business quality,
- the local/remote working note.

The current image/WebGL treatment may remain if it still fits the updated content.

### Selected Work

The Selected Work section has been recently redesigned and should remain structurally and visually intact.

Agreed change:

- Keep the current six-project layout.
- Keep the final `AMVIS / COMING SOON` item.
- Do not add visible text blocks under the cards.
- Enhance the existing hover tooltip with option B: one short project description plus role/tags.

The tooltip should provide micro-case context without cluttering the page. On mobile, critical information must not depend only on hover; the implementation can either keep mobile minimal or expose the added context in an accessible, non-intrusive way.

### Ways To Work

Add a new section that explains what a client can buy without becoming a pricing table.

Use the three engagement types from the source plan:

- Website Sprint
- Brand & Web Direction
- Digital Systems

Each item should include a short description and a compact list of what is included.

Add a subtle pricing anchor in this section. It should be a calm sentence, not a headline or card:

`Most projects are scoped individually, with website work usually starting from 5,000 PLN.`

The Polish wording should carry the same meaning naturally.

### Scope / Outcomes

The current `Services` section lists capabilities. It should be reframed into client-facing outcomes while preserving the existing visual style.

Use the outcome groups from the source plan:

- Shape the direction
- Design the experience
- Build and launch
- Keep it running

This may be implemented by replacing or refactoring `Services.astro`, depending on which keeps the code clearer.

The section should still make capabilities visible, but each group should explain the outcome rather than only list abstract services.

The AI/search wording should stay subtle:

`Content structured for people, search engines and modern AI assistants to understand.`

No AI-heavy positioning should be introduced.

### Process

Add a calm process section that reduces collaboration anxiety.

Use the six steps from the source plan:

1. Send your current site or idea
2. Direction
3. Design
4. Build
5. Launch
6. Care

The section should feel controlled and simple, not legalistic.

Include the small process note from the plan only if it reads naturally in the final layout:

`Projects begin after scope approval and an upfront payment.`

### Testimonials

Keep the existing testimonials and motion direction.

Improve them by surfacing the strongest aligned line as a headline or lead quote:

`The website sold them before they even walked in.`

The final Polish and English wording may differ as long as the idea remains the same.

### Contact / Footer

Contact remains email-only for this pass.

Agreed decisions:

- Do not add a contact form.
- Do not add a phone number.
- Do not change the current Gmail address yet.
- Do not switch to `jed@newframe.studio` until Google Workspace access is recovered.

Update contact copy to be more specific and human, aligned with the source plan:

- send current website,
- send idea or problem,
- Newframe will say if it can help.

The public business email migration is a follow-up task after Google Workspace recovery.

## SEO And Metadata

Update title and description toward the positioning from the source plan.

Recommended English direction:

- Title: `NEWFRAME — Custom Websites & Digital Direction`
- Description: `NEWFRAME is a small design studio creating custom websites and digital experiences for founders, premium services and growing businesses.`

Polish equivalents should be natural, not literal.

Also review JSON-LD in `Base.astro` so it no longer over-focuses on startups and small businesses if the page copy has shifted.

Do not block the implementation on creating a new OG image. If the current OG image path points to a missing asset, record it as a follow-up unless an asset is explicitly added in the implementation pass.

## Technical Constraints

- Keep Astro 5, Tailwind v4, GSAP, Lenis, and current project patterns.
- Do not add new npm dependencies.
- Use existing design tokens from `src/styles/global.css`.
- Use existing fonts only.
- Preserve Astro View Transitions cleanup patterns for all scripts.
- Any new scripted component must use the established cleanup pattern:
  - module-level cleanup function,
  - init function that calls cleanup first,
  - `AbortController` for listeners,
  - tracked `ScrollTrigger` and `SplitText` instances where applicable,
  - cleanup on re-init,
  - immediate init plus `astro:after-swap`.
- If a new section does not need JavaScript, keep it static.
- Do not use `import * as THREE`.
- Keep translatable data in `translations.ts`.

## Likely Component Changes

- `src/i18n/translations.ts`: add or update structured copy for hero, about, work tooltip metadata, ways to work, outcomes, process, testimonials, contact, footer, SEO.
- `src/components/sections/Hero.astro`: add value proposition, subcopy, primary CTA, secondary CTA while preserving current hero identity.
- `src/components/sections/About.astro`: refine copy rendering if needed for the updated founder content.
- `src/components/sections/WorkSelectedMinimal.astro`: preserve layout and animation; enhance tooltip model and rendering.
- `src/components/sections/Services.astro`: refactor into outcomes or replace with a clearer outcomes component.
- `src/components/sections/WaysToWork.astro`: likely new static or lightly animated section.
- `src/components/sections/Process.astro`: likely new static or lightly animated section.
- `src/components/sections/Testimonials.astro`: add or render a lead quote/headline.
- `src/components/global/Footer.astro`: update contact copy while keeping current Gmail.
- `src/layouts/Base.astro`: update SEO defaults/JSON-LD if needed.
- `src/pages/en/index.astro` and `src/pages/pl/index.astro`: insert new sections in the agreed order.

## Verification Plan

Run:

```bash
npm run build
```

Then verify visually in a local browser:

- `/pl/` desktop,
- `/pl/` mobile,
- `/en/` desktop,
- `/en/` mobile.

Check specifically:

- no text overlap,
- hero remains premium and clear,
- new sections match existing visual language,
- Selected Work layout is not redesigned,
- tooltip content is readable and not too heavy,
- footer/contact still works with current Gmail,
- View Transition cleanup patterns are preserved,
- no new hardcoded translatable strings appear in component templates.

## Follow-Ups Outside This Pass

- Recover Google Workspace access.
- Configure `jed@newframe.studio` and/or `hello@newframe.studio`.
- Configure SPF, DKIM, and DMARC.
- Replace public contact email after email setup is confirmed.
- Consider an OG image asset if the current `/og-image.jpg` is missing.
- Consider adding deeper case study pages later, but not in this pass.
