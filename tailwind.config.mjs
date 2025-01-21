/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"p-green": "#B9FF66",
				"p-black": "#191A23",
				"p-white": "#F3F3F3"
			},
			borderRadius:{
				"big": "45px",
				"little": "14px",
				"mini": "7px"
			},
			boxShadow:{
				"box": "0px 5px 0px 0px #191A23"
			}
		},
	},
	plugins: [],
}
