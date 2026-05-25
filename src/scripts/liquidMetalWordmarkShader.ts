import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { LiquidMetal } from '@paper-design/shaders-react';

type LiquidMetalWordmarkOptions = {
  image?: string;
  width?: string;
  height?: string;
};

const DEFAULT_OPTIONS = {
  image: '/images/newframe-footer-wordmark.svg',
  width: '100%',
  height: '100%',
};

export function mountLiquidMetalWordmarkShader(mount: HTMLElement, options: LiquidMetalWordmarkOptions = {}) {
  const root: Root = createRoot(mount);
  const state = { ...DEFAULT_OPTIONS, ...options };

  root.render(createElement(LiquidMetal, {
    speed: 0.39,
    softness: 0.94,
    repetition: 2.05,
    shiftRed: 0,
    shiftBlue: -0.61,
    distortion: 0.07,
    contour: 0.4,
    scale: 1,
    rotation: 0.08,
    shape: 'diamond',
    angle: 0,
    image: state.image,
    colorBack: '#00000000',
    colorTint: '#FFFFFF',
    style: {
      width: state.width,
      height: state.height,
    },
  }));

  return {
    destroy() {
      root.unmount();
    },
  };
}
