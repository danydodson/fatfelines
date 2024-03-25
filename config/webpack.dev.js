const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, '../public'),
        },
        client: {
            overlay: true,
            progress: true,
        },
    }
})
