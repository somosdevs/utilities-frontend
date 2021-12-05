const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#14213d',
        50: '#98b0e4',
        100: '#859ccc',
        200: '#7287b4',
        300: '#5f739c',
        400: '#4d5e85',
        500: '#3a4a6d',
        600: '#273555',
        700: '#14213d',
        800: '#0c162c',
        900: '#040b1b',
      },
      secondary: {
        DEFAULT: '#fca311',
        50: '#f4dcb4',
        100: '#f5d49d',
        200: '#f6cc85',
        300: '#f7c46e',
        400: '#f9bb57',
        500: '#fab340',
        600: '#fbab28',
        700: '#fca311',
        800: '#e3900a',
        900: '#c97c02',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
