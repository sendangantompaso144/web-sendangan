// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	// TODO: Ganti dengan domain GitHub Pages final (mis. https://username.github.io/web-sendangan/)
	site: 'https://example.github.io/web-sendangan/',
	trailingSlash: 'never',
	prefetch: true,
	integrations: [tailwind(), sitemap(), mdx(), image()],
});
