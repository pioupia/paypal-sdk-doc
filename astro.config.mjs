import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PayPal REST',
			description: 'PayPal-REST is an unofficial implementation of the PayPal Rest API. This npm package is here to simplify the usage of the PayPal Rest API.',
			social: {
				github: 'https://github.com/pioupia/paypal-rest',
			},
			editLink: {
				baseUrl: 'https://github.com/pioupia/paypal-rest/edit/main/',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
