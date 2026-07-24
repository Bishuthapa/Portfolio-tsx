// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bishesh-thapa.com.np', // TODO: replace with your real domain before deploy
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});