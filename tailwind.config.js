module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					200: '#d8effb',
					light: '#548FC2',
					main: '#1f5989',
					dark: '#112F49',
				},
			},
		},
	},
	plugins: [],
}
