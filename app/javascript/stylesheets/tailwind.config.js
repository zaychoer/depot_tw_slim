module.exports = {
  theme: {
    extend: {
      colors: {
        "forestgreen": "#282",
        "darkgreen": "#141",
        "darkhaki": "#882",
        "haki": "#992",
        "deephaki": "#441"
      },
      boxShadow: {
        image: '0.176em 0.176em 0.354em 0px rgba(0, 0, 0, 0.75)'
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
