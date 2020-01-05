

const path = require('path')
const fs = require('fs')
const webpack = require('webpack-merge')
const merge = require('webpack-merge')
const glob = require('glob')
const baseConf = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { LIB_DIR } = require('./const')
const { getFiles } = require('./util')

const entries =  (() => {

  // let entries = glob.sync('src/components/**/index.js')
  // entries = entries.reduce((obj, file) => {
  //   console.log('file', file)
  //   const p = path.dirname(file).replace('src', '')
  //   return Object.assign(obj, {
  //     // [p]: './' + file
  //     [file.replace('src', '').replace('.js', '')]: './' + file
  //   })
  // }, {})
  // console.log('entries', entries)
  // return entries

  // function getFiles (dir, fileReg) {

  //   let files = fs.readdirSync(dir)
  //   if (!files.length) return [] 

  //   files = files.reduce((arr, file) => {
  //     let res = []
  //     const filePath = path.join(dir, file)

  //     fileReg.test(file) && res.push(filePath)

  //     // if is directory
  //     if (fs.statSync(filePath).isDirectory()) {
  //       res = res.concat(getFiles(filePath, fileReg))
  //     }

  //     return arr.concat(res)

  //   }, [])

  //   return files
  // }

  let files = getFiles('./src/components', /^index\.js$/)
  files = files.reduce((obj, file) => {
    // console.log('file', file)
    return Object.assign(obj, {
      [file.replace('src', '').replace('.js', '')]: './' + file
    })
  }, {})
  // console.log('files', files)
  return files
})()

module.exports = merge(baseConf, {
  mode: 'development',
  entry: {
    ...entries,
    'index': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../', LIB_DIR),
    // filename: '[name]/index.js',
    library: 'wind-ui',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})