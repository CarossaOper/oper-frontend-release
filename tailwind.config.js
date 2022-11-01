export default {  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vollkornsc: "Vollkorn SC, serif",
        noto: "Noto Serif, serif",
      },
      backgroundImage: {
        'hero': "url('~~/assets/img/hero-bg.jpeg')",
      }
    },
  },
}

