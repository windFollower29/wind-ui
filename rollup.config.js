
import commonjs from 'rollup-plugin-commonjs' 
import VuePlugin from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'

const babelConf = require('./babel.config')

const { getFiles } = require('./build/util')
const { ES_DIR } = require('./build/const')

const entries =  (() => {

  let files = getFiles('./src/components', /^index\.js$/)
  console.log('files', files)
  files.push('src/index.js')
  files = files.map(file => {
    return {
      input: './' + file,
      output: {
        file: file.replace('src', ES_DIR),
        format: 'esm'
      },
      // .replace('.js', '')
      plugins: [
        scss(),
        resolve(),
        babel({
          runtimeHelpers: true,
          exclude: 'node_modules/**'
        }),
        commonjs(),
        VuePlugin()
      ]
    }
  })
  console.log('files', files)
  return files
})()

module.exports = entries