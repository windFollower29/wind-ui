
const path = require('path')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConf, {
  mode: 'development',
  entry: path.resolve(__dirname, '../site/src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../dist'),
  //   compress: true,
  //   port: 9000
  // }
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../site/src/index.html'),
      filename: 'index.html'
    })
  ]
})