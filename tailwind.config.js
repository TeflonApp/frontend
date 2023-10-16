/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'background-color': '#121112',
				'text-color': '#fafafa',
				'primary-color': '#434441',
				'secondary-color': '#1b1d1c',
				'accent-color': '#848580'
			}
		}
	},
	plugins: []
};
