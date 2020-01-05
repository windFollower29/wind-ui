
const fs = require('fs')
const path = require('path')

const { LIB_ROOT } = require('./const')

fs.createReadStream(path.join(__dirname, '../package.json'))
  .pipe(fs.createWriteStream(path.join(__dirname, '..', LIB_ROOT, 'package.json')))