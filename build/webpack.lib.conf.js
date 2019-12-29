

const path = require('path')
const webpack = require('webpack-merge')
const merge = require('webpack-merge')
const glob = require('glob')
const baseConf = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const entries =  (() => {

  let entries = glob.sync('src/components/**/index.js')
  entries = entries.reduce((obj, file) => {

    const p = path.dirname(file).replace('src', '')
    return Object.assign(obj, {
      [p]: './' + file
    })
  }, {})
  console.log('entries', entries)
  return entries
})()

module.exports = merge(baseConf, {
  mode: 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]/index.js',
    library: 'win',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})