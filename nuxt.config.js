module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FCC Future Collision Coin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:site_name', content: 'FCC Future Collision Coin' },
      { name: 'og:title', content: 'You dont have to trade Bitcoin to become super rich!' },
      { name: 'og:description', content: 'We want to change the world of Bitcoin finance in a sustainable way by using blockchain and cryptocurrencies. We will generate future income from which even your grandchildren will benefit.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://fcc.steampixel.de/' },
      { name: 'og:image', content: 'https://fcc.steampixel.de/images/bitcoin-3083578_1920.jpg' },
      { hid: 'description', name: 'description', content: 'You dont have to trade Bitcoin to become super rich! We are a young and dynamic startup from Würzburg, Germany. We want to change the world of Bitcoin finance in a sustainable way by using blockchain and cryptocurrencies. We will generate future income from which even your grandchildren will benefit.' }
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
