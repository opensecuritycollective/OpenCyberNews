import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://opensecuritycollective.github.io',
  base: '/OpenCyberNews',
  integrations: [tailwind()],
});
