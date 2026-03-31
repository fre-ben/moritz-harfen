/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,ts,js,tsx}"],
	safelist: [
		"lg:grid-flow-col",
		"lg:grid-flow-row",
		"text-4xl",
		"text-xl",
		"sm:mr-10",
	],
	theme: {
		extend: {
			colors: {
				background: "#E6E6E6",
				highlight: "#FF4D2F",
				highlight60: "#F58A78",
				moritzGrey: "#707070",
			},
			spacing: {
				18: "4.5rem",
				70: "17.5rem",
				100: "25rem",
			},
			gridTemplateColumns: {
				leader: "max-content auto",
			},
			fontFamily: {
				sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
