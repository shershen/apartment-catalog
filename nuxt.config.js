module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'apartment-catalog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test tast for Creative' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/scss/base/normalize.css' },
    { src: '~assets/scss/main.scss', lang: 'sass' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffe310' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:400,500,600:cyrillic&display=swap']
    },
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

