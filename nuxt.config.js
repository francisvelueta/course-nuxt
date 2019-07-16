export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Codiga Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Blog about technology and stuff'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // to add external fonts
      // { rel: 'stylesheet', href: 'https://sdfsdfdsfsdfd'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fa923f', height: '4px', duration: 5000 },

  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL:
      process.env.BASE_URL || 'https://school-bus-app-96816.firebaseio.com',
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // enviroment variables
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://school-bus-app-96816.firebaseio.com',
    fbApiKey: 'AIzaSyACSAcbXPV35d_foAOsPK7QBjucZFeTVJ4'
  },
  // transition is deprecated
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
}
