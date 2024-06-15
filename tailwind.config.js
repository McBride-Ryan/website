/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#C3B367',
          secondary: '#67C385',
          tertiary: '#6777C3',
          quaternary: '#C367A5',
          title__primary: '#3b3b3b',
          info__primary: '#6e6e6e',
          banner__black: '#191919',
      },
      fontFamily: {
          heading: ['Roboto', 'sans-serif'],
          body: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}