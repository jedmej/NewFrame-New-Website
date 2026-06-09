import {
  ShaderMount,
  ShaderFitOptions,
  defaultObjectSizing,
  getShaderColorFromString,
  liquidMetalFragmentShader,
  LiquidMetalShapes,
  toProcessedLiquidMetal,
} from '@paper-design/shaders';

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

// Textures below 1024px render blurry — upscale the decode target like the
// upstream react wrapper does.
function setMinImageSize(img: HTMLImageElement) {
  if (img.naturalWidth < 1024 && img.naturalHeight < 1024) {
    if (img.naturalWidth < 1 || img.naturalHeight < 1) return;
    const aspect = img.naturalWidth / img.naturalHeight;
    img.width = Math.round(aspect > 1 ? 1024 * aspect : 1024);
    img.height = Math.round(aspect > 1 ? 1024 : 1024 / aspect);
  }
}

export type LiquidMetalWordmarkHandle = {
  destroy(): void;
};

export function mountLiquidMetalWordmarkShader(
  mount: HTMLElement,
  options: LiquidMetalWordmarkOptions = {}
): LiquidMetalWordmarkHandle {
  const state = { ...DEFAULT_OPTIONS, ...options };

  const host = document.createElement('div');
  host.style.width = state.width;
  host.style.height = state.height;
  mount.appendChild(host);

  let shader: ShaderMount | null = null;
  let objectUrl: string | null = null;
  let disposed = false;

  toProcessedLiquidMetal(state.image)
    .then((result) => {
      if (disposed) return;
      objectUrl = URL.createObjectURL(result.pngBlob);

      const img = new Image();
      img.onload = () => {
        if (disposed) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          return;
        }
        setMinImageSize(img);
        shader = new ShaderMount(
          host,
          liquidMetalFragmentShader,
          {
            u_colorBack: getShaderColorFromString('#00000000'),
            u_colorTint: getShaderColorFromString('#FFFFFF'),
            u_image: img,
            u_contour: 0.4,
            u_distortion: 0.07,
            u_softness: 0.94,
            u_repetition: 2.05,
            u_shiftRed: 0,
            u_shiftBlue: -0.61,
            u_angle: 0,
            u_isImage: true,
            u_shape: LiquidMetalShapes.diamond,
            u_fit: ShaderFitOptions[defaultObjectSizing.fit],
            u_scale: 1,
            u_rotation: 0.08,
            u_offsetX: defaultObjectSizing.offsetX,
            u_offsetY: defaultObjectSizing.offsetY,
            u_originX: defaultObjectSizing.originX,
            u_originY: defaultObjectSizing.originY,
            u_worldWidth: defaultObjectSizing.worldWidth,
            u_worldHeight: defaultObjectSizing.worldHeight,
          },
          undefined,
          0.39,
          0,
          undefined,
          undefined,
          ['u_image']
        );
      };
      img.src = objectUrl;
    })
    .catch((error) => {
      console.warn('[footer] Failed to initialize wordmark shader', error);
    });

  return {
    destroy() {
      disposed = true;
      shader?.dispose();
      shader = null;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = null;
      host.remove();
    },
  };
}
