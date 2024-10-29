import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://super-astro-web.netlify.app/",
  integrations: [preact()]
});