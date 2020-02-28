module.exports = {
  mode: 'universal',
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/page-:index',
          name: 'index',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          path: '/categories/:categoryName/page-:index',
          name: 'categories-categoryName-2',
          component: resolve(__dirname, 'pages/categories/_categoryName.vue')
        },
        {
          path: '/tags/:tagName/page-:index',
          name: 'tags-tagName-2',
          component: resolve(__dirname, 'pages/tags/_tagName.vue')
        }
      )
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BCarousel',
      'BCarouselSlide',
      'BIcon',
      'BIconTagFill',
      'BIconClockFill',
      'BIconEyeFill',
      'BIconGridFill'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
