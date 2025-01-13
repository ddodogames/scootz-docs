// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://ddodogames.github.io",
	base: "/scootz-docs",
	integrations: [
		starlight({
			title: 'scootz.js',
			social: {
				github: 'https://github.com/ddodogames/scootz.js',
			},
			sidebar: [
				{
					label: 'Home',
			autogenerate: { directory: 'home' },
			collapsed: true
				},
				{
					label: 'Functions',
				    autogenerate: { directory: 'functions' },
			        collapsed: true
				}],
		}),
	],
});
