

const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const  { CleanWebpackPlugin }  = require('clean-webpack-plugin')

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConf = {
  // constext: '..',
  module: {
    // require
    // unknownContextRegExp: /$^/,
    // unknownContextCritical: false,

    // // require(expr)
    // exprContextRegExp: /$^/,
    // exprContextCritical: false,

    // // require("prefix" + expr + "surfix")
    // wrappedContextRegExp: /$^/,
    // wrappedContextCritical: false,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            // options: {

            // }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   rootMode: 'upward'
            // }
          },
          // 'vue-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   hmr: process.env.NODE_ENV === 'development',
            // },
          },
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',

          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'] 
  },

}

module.exports = baseConf