// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
                        site: "https://ddodogames.github.io",
                        base: "/scootz-docs",
			title: 'scootz.js',
			social: {
				github: 'https://github.com/ddodogames/scootz.js',
			},
			sidebar: [
				{
					label: 'Functions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/introduction' },
					],
				}
			       ],
		}),
	],
});
