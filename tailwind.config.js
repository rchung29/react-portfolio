/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      base: ['Hanken Grotes'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}