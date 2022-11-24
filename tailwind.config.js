// @ts-check

const defaults = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
			mono: ['"JetBrains Mono"', ...defaults.fontFamily.mono],
			sans: ['"GeneralSans-Variable"', ...defaults.fontFamily.sans],
		},
    extend: {},
  },
  plugins: [],
}
