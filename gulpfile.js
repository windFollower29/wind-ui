
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const mkdirp = require('mkdirp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
// const replace = require('gulp-replace')
// const replace = require('./index.js')
const rename = require('gulp-rename')
const print = require('gulp-print').default

const { LIB_DIR } = require('./build/const')
const { getFiles } = require('./build/util')

sass.compiler = require('node-sass')

gulp.task('default', ['scss'], () => {
  return gulp.src('src/**/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(postcss([ autoprefixer() ]))
  // .pipe(print())
  // .pipe(rename((path) => {
  //   return {
  //     ...path,
  //     dirname: path.dirname + '/style'
  //   }
  // }))
  // .pipe(print())
  .pipe( gulp.dest(LIB_DIR, { sourcemaps: true }) )
})

gulp.task('scss', () => {

  fse.copySync(
    path.resolve(__dirname, 'src/style'),
    path.resolve(__dirname, LIB_DIR, 'style')
  )

  const files = getFiles(['./src/components'], /^index\.scss$/)
  // console.log(files)
  
  files.forEach(file => {
    const {
      dir,
      base
    } = path.parse(file)
    const destPath = path.join(__dirname,
      LIB_DIR,
      dir.replace(/[^\/]+\//, '')
    )
    // console.log(path.parse(file))

    fse.copyFileSync(
      path.resolve(__dirname, file),
      path.resolve(
        destPath,
        base
      )
    )

    mkdirp.sync(path.resolve(destPath, 'style'))
    fs.writeFileSync(path.resolve(destPath, 'style', 'index.js'), `require ('../index.scss')`)

  })
})

