
const name = require('../package.json').name

const LIB_ROOT = `node_modules/${name}/`
const LIB_DIR = LIB_ROOT + 'lib'
const ES_DIR = LIB_ROOT + 'es'
// const ES_DIR = 'wind-ui/' + 'es'

module.exports = {
  LIB_ROOT,
  LIB_DIR,
  ES_DIR
}