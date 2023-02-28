const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    compress: true,
    magicHtml: true,
    allowedHosts: 'auto',
    static: {
      directory: path.join(__dirname, '../public'),
    },
    client: {
      // logging: 'none',
      overlay: true,
      progress: true,
    },
  }
})
