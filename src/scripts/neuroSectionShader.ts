import {
  ShaderMount,
  ShaderFitOptions,
  defaultPatternSizing,
  getShaderColorFromString,
  neuroNoiseFragmentShader,
} from '@paper-design/shaders';

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

function buildUniforms(state: typeof DEFAULT_OPTIONS) {
  return {
    u_colorFront: getShaderColorFromString(state.colorFront),
    u_colorMid: getShaderColorFromString(state.colorMid),
    u_colorBack: getShaderColorFromString(state.colorBack),
    u_brightness: state.brightness,
    u_contrast: state.contrast,
    u_fit: ShaderFitOptions[defaultPatternSizing.fit],
    u_scale: state.scale,
    u_rotation: defaultPatternSizing.rotation,
    u_offsetX: defaultPatternSizing.offsetX,
    u_offsetY: defaultPatternSizing.offsetY,
    u_originX: defaultPatternSizing.originX,
    u_originY: defaultPatternSizing.originY,
    u_worldWidth: defaultPatternSizing.worldWidth,
    u_worldHeight: defaultPatternSizing.worldHeight,
  };
}

export type NeuroSectionShaderHandle = {
  update(nextOptions: Partial<NeuroSectionShaderOptions>): void;
  destroy(): void;
};

export function mountNeuroSectionShader(
  mount: HTMLElement,
  options: NeuroSectionShaderOptions = {}
): NeuroSectionShaderHandle {
  const state = { ...DEFAULT_OPTIONS, ...options };

  const host = document.createElement('div');
  host.style.width = state.width;
  host.style.height = state.height;
  mount.appendChild(host);

  const shader = new ShaderMount(
    host,
    neuroNoiseFragmentShader,
    buildUniforms(state),
    undefined,
    state.speed,
    state.frame
  );

  return {
    update(nextOptions: Partial<NeuroSectionShaderOptions>) {
      Object.assign(state, nextOptions);
      shader.setUniforms(buildUniforms(state));
      if (nextOptions.speed !== undefined) shader.setSpeed(state.speed);
      if (nextOptions.frame !== undefined) shader.setFrame(state.frame);
    },
    destroy() {
      shader.dispose();
      host.remove();
    },
  };
}
