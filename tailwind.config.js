const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  mode: "jit",
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  },
  theme: {
    colors: {
      ...colors,
      cust: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        light: "var(--light)",
        black: "var(--black)",
        white: "var(--white)",
        blue: "var(--blue)",
      },
      custLight: {
        primary: "var(--primary-light)",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
