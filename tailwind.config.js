/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html.twig"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "Helvetica", "Arial", "sans-serif"], // Custom sans-serif font stack
        serif: ["Merriweather", "serif"] // Custom serif font stack
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
