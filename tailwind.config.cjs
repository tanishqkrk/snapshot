/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#F5F5F5",
        darkBg: "#181823"
      }
    },
  },
  plugins: [],
}
