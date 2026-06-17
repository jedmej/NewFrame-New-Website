/**
 * DialKitPanel — DEV-ONLY typography tuner built on DialKit (joshpuckett.me/dialkit).
 *
 * A single DialKit panel with one collapsible folder per typography utility
 * class (plus the body base), so you can live-tune font size, line height,
 * letter spacing, weight, word spacing, measure (max-width), text-transform
 * and text-wrap, and watch the site update in real time. Changes are applied
 * via a throwaway injected <style> element — the real CSS in global.css is
 * never touched.
 *
 * - "Reset all" writes the original defaults back into the store via
 *   DialStore.updateValue (in place — the panel stays open). The defaults are
 *   captured once on first render, BEFORE the override <style> is injected, so
 *   they reflect the real CSS rather than the currently-tuned values.
 * - DialKit's built-in Presets (the version dropdown — "Version 1" is always
 *   the original defaults) and Copy (exports current values as JSON) give you
 *   snapshot/undo on top of that.
 * - The panel starts collapsed every load (defaultOpen={false}); folders start
 *   collapsed too (_collapsed). DialKit persists nothing, so every reload is fresh.
 *
 * Mounted only under import.meta.env.DEV (see DialKitDev.astro / Page.astro),
 * so neither React nor DialKit ship to production.
 */
import { useEffect, useMemo } from 'react';
import { useDialKit, DialRoot, DialStore } from 'dialkit';
import 'dialkit/styles.css';

type Target = { key: string; folder: string; selector: string };

// `folder` is the label shown for each group inside the single panel.
const TARGETS: Target[] = [
  { key: 'display-xl', folder: 'Display XL', selector: '.text-display-xl' },
  { key: 'display-lg', folder: 'Display LG', selector: '.text-display-lg' },
  { key: 'serif-display', folder: 'Serif Display', selector: '.text-serif-display' },
  { key: 'mono-xs', folder: 'Mono XS', selector: '.text-mono-xs' },
  { key: 'body', folder: 'Body', selector: '.text-body' },
  { key: 'base', folder: 'Base (body)', selector: 'body' },
];

const TRANSFORMS = ['none', 'uppercase', 'lowercase', 'capitalize'];
const WRAPS = ['normal', 'balance', 'pretty', 'nowrap'];
const STYLE_ID = 'dialkit-overrides';
const PANEL_NAME = 'Typography';

type Defaults = {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
  wordSpacing: number;
  maxWidth: number;
  textTransform: string;
  textWrap: string;
};

// Control keys in a folder, in DialValue-compatible form (matches Defaults keys).
const CONTROL_KEYS = [
  'fontSize', 'lineHeight', 'letterSpacing', 'fontWeight',
  'wordSpacing', 'maxWidth', 'textTransform', 'textWrap',
] as const;

/** Read sensible starting values for a selector from the live computed style. */
function readDefaults(selector: string): Defaults {
  let el: Element | null = selector === 'body' ? document.body : document.querySelector(selector);
  let probe: HTMLElement | null = null;

  if (!el && selector.startsWith('.')) {
    probe = document.createElement('span');
    probe.className = selector.slice(1);
    probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none';
    probe.textContent = 'Mg';
    document.body.appendChild(probe);
    el = probe;
  }

  const fallback: Defaults = {
    fontSize: 16, lineHeight: 1.4, letterSpacing: 0, fontWeight: 400,
    wordSpacing: 0, maxWidth: 0, textTransform: 'none', textWrap: 'normal',
  };
  if (!el) return fallback;

  const cs = getComputedStyle(el);
  const fontSize = parseFloat(cs.fontSize) || 16;
  const round = (n: number, p = 2) => Math.round(n * 10 ** p) / 10 ** p;

  const lh = cs.lineHeight === 'normal' ? 1.2 : round(parseFloat(cs.lineHeight) / fontSize);
  const ls = cs.letterSpacing === 'normal' ? 0 : round(parseFloat(cs.letterSpacing) / fontSize, 3);
  const ws = cs.wordSpacing === 'normal' ? 0 : round(parseFloat(cs.wordSpacing), 1);
  let mw = cs.maxWidth === 'none' ? 0 : Math.round(parseFloat(cs.maxWidth) / fontSize);
  if (!isFinite(mw)) mw = 0;

  if (probe) probe.remove();

  return {
    fontSize: round(fontSize, 1),
    lineHeight: lh,
    letterSpacing: ls,
    fontWeight: parseInt(cs.fontWeight, 10) || 400,
    wordSpacing: ws,
    maxWidth: mw,
    textTransform: cs.textTransform || 'none',
    textWrap: (cs as unknown as { textWrap?: string }).textWrap || 'normal',
  };
}

/** Build one folder's worth of controls for a target. */
function makeFolder(d: Defaults) {
  return {
    _collapsed: true,
    fontSize: [d.fontSize, 8, 320, 0.5],
    lineHeight: [d.lineHeight, 0.7, 2.4, 0.01],
    letterSpacing: [d.letterSpacing, -0.12, 0.4, 0.005],
    fontWeight: [d.fontWeight, 200, 700, 100],
    wordSpacing: [d.wordSpacing, -10, 40, 0.5],
    maxWidth: [d.maxWidth, 0, 120, 1],
    textTransform: { type: 'select', options: TRANSFORMS, default: d.textTransform },
    textWrap: { type: 'select', options: WRAPS, default: d.textWrap },
  } as const;
}

type Params = {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
  wordSpacing: number;
  maxWidth: number;
  textTransform: string;
  textWrap: string;
};

function ruleFor(selector: string, p: Params): string {
  const lines = [
    `font-size: ${p.fontSize}px !important;`,
    `line-height: ${p.lineHeight} !important;`,
    `letter-spacing: ${p.letterSpacing}em !important;`,
    `font-weight: ${p.fontWeight} !important;`,
    `word-spacing: ${p.wordSpacing}px !important;`,
    `max-width: ${p.maxWidth <= 0 ? 'none' : `${p.maxWidth}ch`} !important;`,
    `text-transform: ${p.textTransform} !important;`,
    `text-wrap: ${p.textWrap} !important;`,
  ];
  return `${selector} {\n  ${lines.join('\n  ')}\n}`;
}

export default function DialKitPanel() {
  // Capture the ORIGINAL defaults once, on first render — before the override
  // <style> (injected by the effect below) exists, so getComputedStyle reflects
  // the real CSS, not the currently-tuned values. Reset relies on this.
  const defaults = useMemo(() => {
    const out: Record<string, Defaults> = {};
    for (const t of TARGETS) out[t.key] = readDefaults(t.selector);
    return out;
  }, []);

  const config = useMemo(() => {
    const cfg: Record<string, unknown> = {
      reset: { type: 'action', label: 'Reset all to defaults' },
    };
    for (const t of TARGETS) cfg[t.folder] = makeFolder(defaults[t.key]);
    return cfg;
  }, [defaults]);

  const resetAll = () => {
    const panel = DialStore.getPanels().find((p) => p.name === PANEL_NAME);
    if (!panel) return;
    for (const t of TARGETS) {
      const d = defaults[t.key];
      for (const k of CONTROL_KEYS) {
        DialStore.updateValue(panel.id, `${t.folder}.${k}`, d[k]);
      }
    }
  };

  const values = useDialKit(PANEL_NAME, config, {
    onAction: (path: string) => {
      if (path === 'reset') resetAll();
    },
  }) as Record<string, Params>;

  useEffect(() => {
    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = TARGETS
      .map((t) => ruleFor(t.selector, values[t.folder]))
      .join('\n\n');
  }, [values]);

  useEffect(() => () => document.getElementById(STYLE_ID)?.remove(), []);

  return <DialRoot defaultOpen={false} />;
}
