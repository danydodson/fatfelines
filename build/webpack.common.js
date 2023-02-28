const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ["@babel/preset-env", "@babel/preset-react"], },
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader",],
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: { loader: 'url-loader', },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'global.css',
      chunkFilename: 'global.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html')
    })
  ]
}
