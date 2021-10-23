const path = require('path')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/global.scss";'
      }
    }
  },

  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/api/': {
            target: 'http://0.0.0.0:3000',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@c', path.resolve(__dirname, 'src/components'))
      .set('@cf', path.resolve(__dirname, 'src/components/filterscomponents'))
      .set('@cs', path.resolve(__dirname, 'src/components/sliderscomponents'))
      .set('@cv', path.resolve(__dirname, 'src/components/views'))
      // .set('@r', path.resolve(__dirname, 'src/router'))
      // .set('@p', path.resolve(__dirname, 'src/views'))
      // .set('@api', path.resolve(__dirname, 'src/api'))
      .set('@i', path.resolve(__dirname, 'src/assets/imgFilterPostcard/'))
      .set('@ic', path.resolve(__dirname, 'src/assets/imgcarousel/'))
    // .set('@a', path.resolve(__dirname, 'src/assets'))
    // .set('@config', path.resolve(__dirname, 'src/config'))
  }
}
