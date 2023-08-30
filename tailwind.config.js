/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lightOrange": "#FFF0E6",
        "brown": "#C19578",
        "linear": "#FFDBC48C",
      }
    },
  },
  plugins: [],
}