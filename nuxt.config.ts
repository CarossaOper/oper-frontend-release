// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    app: {
      head: {
        title: 'Die Carossa Oper',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Die Carossa Oper "Die Göttin wird modern" ist ein Schulprojekt des P-Seminars "Amateur meets Profi" 2022/23, welches sich Textgestaltung, Komposition und Organisation einer eigenen Oper zum Ziel gesetzt hat.' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'preconnect', href: 'api.fonts.coollabs.io'},
          { rel: 'stylesheet', type: 'text/css', href: 'https://api.fonts.coollabs.io/css2?family=Vollkorn+SC&display=swap'},
          { rel: 'stylesheet', type: 'text/css', href: 'https://api.fonts.coollabs.io/css2?family=Noto+Serif:wght@400;700&display=swap'}
        ]
      }
    },

    components: true,

    modules: [
        '@nuxtjs/tailwindcss',
    ],

    tailwindcss: {
        configPath: '~/tailwind.config'
    },

    build: {
      transpile: ['swiper'],
    },

})
