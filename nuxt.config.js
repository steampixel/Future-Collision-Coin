module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Future Collision Coin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wanderer.ai will leverage chatbot context to the next level by storing and executing its artificial intellicenge (AI) inside a logic graph.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
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
    },

    // Bootstrap is too big for one vendor: Split it up
    // https://github.com/nuxt/nuxt.js/pull/2687
    vendor: ['bootstrap-vue'],
    maxChunkSize: 300000 // value in octet

    /*analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    }*/

  },
  modules: [
    {src: 'bootstrap-vue/nuxt'},
    ['nuxt-matomo', { matomoUrl: '//matomo.steampixel.de/', siteId: 3 }]
  ]
}
