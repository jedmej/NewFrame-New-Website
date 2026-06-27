/**
 * DialKitPanel — DEV-ONLY selected work motion tuner.
 *
 * Controls the scroll-scrubbed card entrance in WorkSelectedCards. Values are
 * written as CSS custom properties on #work-cards, then the section rebuilds
 * its ScrollTrigger so timing and stagger changes are visible immediately.
 */
import { useEffect, useMemo, useRef } from 'react';
import { useDialKit, DialRoot, DialStore } from 'dialkit';
import 'dialkit/styles.css';

const PANEL_NAME = 'Selected Work Motion';
const STYLE_ID = 'dialkit-work-cards-motion';
const PANEL_STYLE_ID = 'dialkit-work-cards-panel-scroll';

const DEFAULTS = {
  offsetX: 546,
  startOpacity: 1,
  duration: 1.46,
  stagger: 0.085,
  scrub: 1,
  start: 99,
  end: 7,
};

const CONTROL_KEYS = [
  'offsetX',
  'startOpacity',
  'duration',
  'stagger',
  'scrub',
  'start',
  'end',
] as const;

type MotionParams = typeof DEFAULTS;

function renderVars(values: MotionParams) {
  return `#work-cards {
  --work-cards-entrance-x: ${values.offsetX}px;
  --work-cards-entrance-opacity: ${values.startOpacity};
  --work-cards-entrance-duration: ${values.duration};
  --work-cards-entrance-stagger: ${values.stagger};
  --work-cards-entrance-scrub: ${values.scrub};
  --work-cards-entrance-start: ${values.start};
  --work-cards-entrance-end: ${values.end};
}`;
}

function dispatchTuningChange() {
  window.dispatchEvent(new CustomEvent('work-cards-tuning-change'));
}

function ensurePanelScrollStyles() {
  let style = document.getElementById(PANEL_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = PANEL_STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = `.dialkit-panel[data-position="top-right"] .dialkit-panel-inner:not([data-collapsed="true"]) {
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-bottom: 14px;
}`;
}

export default function DialKitPanel() {
  const refreshTimer = useRef<number | null>(null);
  const config = useMemo(() => ({
    reset: { type: 'action', label: 'Reset selected work motion' },
    offsetX: [DEFAULTS.offsetX, 0, 700, 1],
    startOpacity: [DEFAULTS.startOpacity, 0.05, 1, 0.01],
    duration: [DEFAULTS.duration, 0.2, 2, 0.01],
    stagger: [DEFAULTS.stagger, 0, 0.24, 0.005],
    scrub: [DEFAULTS.scrub, 0.1, 2.5, 0.05],
    start: [DEFAULTS.start, 55, 110, 1],
    end: [DEFAULTS.end, 0, 70, 1],
  }), []);

  const resetAll = () => {
    const panel = DialStore.getPanels().find((p) => p.name === PANEL_NAME);
    if (!panel) return;
    for (const key of CONTROL_KEYS) {
      DialStore.updateValue(panel.id, key, DEFAULTS[key]);
    }
  };

  const values = useDialKit(PANEL_NAME, config, {
    onAction: (path: string) => {
      if (path === 'reset') resetAll();
    },
  }) as MotionParams;

  useEffect(() => {
    ensurePanelScrollStyles();

    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = renderVars(values);

    if (refreshTimer.current) window.clearTimeout(refreshTimer.current);
    refreshTimer.current = window.setTimeout(dispatchTuningChange, 90);
  }, [values]);

  useEffect(() => () => {
    if (refreshTimer.current) window.clearTimeout(refreshTimer.current);
    document.getElementById(STYLE_ID)?.remove();
    document.getElementById(PANEL_STYLE_ID)?.remove();
    dispatchTuningChange();
  }, []);

  useEffect(() => {
    const handlePanelWheel = (event: WheelEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const panel = target?.closest<HTMLElement>('.dialkit-panel-inner');
      if (!panel || panel.dataset.collapsed === 'true') return;

      const canScroll = panel.scrollHeight > panel.clientHeight;
      if (!canScroll) return;

      event.preventDefault();
      event.stopPropagation();
      panel.scrollTop += event.deltaY;
    };

    document.addEventListener('wheel', handlePanelWheel, { capture: true, passive: false });
    return () => document.removeEventListener('wheel', handlePanelWheel, { capture: true });
  }, []);

  return <DialRoot defaultOpen={false} />;
}
