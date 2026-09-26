import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static-only output. No SSR adapters, no server runtime.
export default defineConfig({
  base: '/dune/',
  output: 'static',
  site: 'https://dune-erbil.example.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      noExternal: ['three'],
    },
  },
});