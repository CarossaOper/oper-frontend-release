/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'mnav': '940px'
    },
    extend: {
      fontFamily: {
        vollkornsc: "Vollkorn SC, serif",
        noto: "Noto Serif, serif",
      }
    },
  },
  plugins: [],
}
