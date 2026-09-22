import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://degenemporium.com',
  // No sitemap or RSS while the site is a single holding page -- the page is
  // marked noindex, so there is nothing to submit.
  image: { responsiveStyles: true },
});
