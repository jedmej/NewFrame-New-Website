import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { NeuroNoise } from '@paper-design/shaders-react';

export type NeuroSectionShaderColors = {
  colorBack?: string;
  colorMid?: string;
  colorFront?: string;
};

type NeuroSectionShaderOptions = NeuroSectionShaderColors & {
  scale?: number;
  speed?: number;
  contrast?: number;
  brightness?: number;
  frame?: number;
  width?: string;
  height?: string;
};

const DEFAULT_OPTIONS = {
  scale: 1.68,
  speed: 0.5,
  contrast: 1,
  brightness: 0,
  frame: 3371736.873002438,
  colorBack: '#00000000',
  colorMid: '#FFFDFB',
  colorFront: '#FFFFFF80',
  width: '1440px',
  height: '1000px',
};

export function mountNeuroSectionShader(mount: HTMLElement, options: NeuroSectionShaderOptions = {}) {
  const root = createRoot(mount);
  const state = { ...DEFAULT_OPTIONS, ...options };

  const render = () => {
    root.render(createElement(NeuroNoise, {
      scale: state.scale,
      speed: state.speed,
      contrast: state.contrast,
      brightness: state.brightness,
      frame: state.frame,
      colorBack: state.colorBack,
      colorMid: state.colorMid,
      colorFront: state.colorFront,
      style: {
        height: state.height,
        width: state.width,
      },
    }));
  };

  render();

  return {
    update(nextOptions: Partial<NeuroSectionShaderOptions>) {
      Object.assign(state, nextOptions);
      render();
    },
    destroy() {
      root.unmount();
    },
  };
}
