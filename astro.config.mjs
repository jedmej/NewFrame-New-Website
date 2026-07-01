// @ts-check
import { existsSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Astro does not emit <link rel="modulepreload"> for the static imports of
// component scripts, so shared chunks (GSAP core, ScrollTrigger, SplitText…)
// are only discovered after the entry scripts download and parse — a second
// network waterfall wave. This hook walks each page's static import graph in
// the built output and injects preload hints for the transitive chunks.
// Dynamic imports (the lazy shader runtimes) are intentionally not matched.
function modulePreloadHints() {
  /** @type {Map<string, string[]>} */
  const chunkDeps = new Map();

  return {
    name: 'modulepreload-hints',
    hooks: {
      /** @param {{ dir: URL, logger: { info: (msg: string) => void } }} ctx */
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);

        const staticImports = async (/** @type {string} */ publicPath) => {
          const cached = chunkDeps.get(publicPath);
          if (cached) return cached;
          const code = await readFile(path.join(distDir, publicPath), 'utf8');
          const deps = new Set();
          // Matches `import"./x.js"`, `import{a}from"./x.js"`, `export{a}from"./x.js"`;
          // dynamic import("...") never matches because of the paren.
          for (const match of code.matchAll(/(?:import|from)\s*["']([^"']+)["']/g)) {
            if (!match[1].startsWith('.')) continue;
            const dep = path.posix.resolve(path.posix.dirname(publicPath), match[1]);
            if (existsSync(path.join(distDir, dep))) deps.add(dep);
          }
          const result = [...deps];
          chunkDeps.set(publicPath, result);
          return result;
        };

        const files = await readdir(distDir, { recursive: true });
        let hintCount = 0;

        for (const file of files) {
          if (!file.endsWith('.html')) continue;
          const htmlPath = path.join(distDir, file);
          const html = await readFile(htmlPath, 'utf8');
          const entries = [...html.matchAll(/<script[^>]*type="module"[^>]*src="([^"]+)"/g)].map((m) => m[1]);
          if (entries.length === 0) continue;

          const seen = new Set(entries);
          const queue = [...entries];
          const hints = [];
          while (queue.length > 0) {
            const current = queue.shift();
            for (const dep of await staticImports(/** @type {string} */ (current))) {
              if (seen.has(dep)) continue;
              seen.add(dep);
              hints.push(dep);
              queue.push(dep);
            }
          }
          if (hints.length === 0) continue;

          const links = hints.map((href) => `<link rel="modulepreload" href="${href}">`).join('');
          await writeFile(htmlPath, html.replace('</head>', `${links}</head>`), 'utf8');
          hintCount += hints.length;
        }

        logger.info(`modulepreload-hints: injected ${hintCount} hints`);
      },
    },
  };
}

// React is needed only in dev, to render the DialKit typography tuner island.
// Registering it conditionally keeps the React renderer chunk out of the
// production build entirely (astro build sets NODE_ENV=production).
const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://newframe.studio',
  compressHTML: true,
  integrations: [
    // React is enabled solely to render the dev-only DialKit typography tuner
    // (src/components/dev/DialKitPanel.tsx). Dev-only, so no React ships to prod.
    ...(isDev ? [react()] : []),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pl: 'pl',
        },
      },
      filter: (page) => !page.endsWith('newframe.studio/'),
    }),
    modulePreloadHints(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
