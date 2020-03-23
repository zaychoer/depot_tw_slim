module.exports = {
  theme: {
    extend: {
      colors: {
        "regal-green": "#282",
      },
      boxShadow: {
        custom: '0.176em 0.176em 0.354em 0px rgba(0, 0, 0, 0.75)'
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
