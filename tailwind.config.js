/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html.twig"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "Helvetica", "Arial", "sans-serif"], // Custom sans-serif font stack
        serif: ["Merriweather", "serif"] // Custom serif font stack
      },
      colors: {
        "dark-blue": "#006d77",
        "light-blue": "#83c5be"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
