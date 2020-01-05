
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const mkdirp = require('mkdirp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

const rename = require('gulp-rename')
const print = require('gulp-print').default

const { LIB_DIR, ES_DIR } = require('./build/const')
const { getFiles } = require('./build/util')

sass.compiler = require('node-sass')

gulp.task('lib', ['libScss'], () => {
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
  .pipe( gulp.dest(LIB_DIR, { sourcemaps: true }) )
})

gulp.task('es', ['esScss'])

gulp.task('libScss', () => {
  return scssTask(LIB_DIR)
})

gulp.task('esScss', () => {
  return scssTask(ES_DIR)
})

function scssTask (DIR) {
  const files = getFiles(['./src/components'], /^index\.scss$/)
  
  files.forEach(file => {
    const {
      dir,
      base
    } = path.parse(file);

    // ([LIB_DIR, ES_DIR]).forEach(DIR => {

      // copy all style files to library
      // mkdirp.sync(path.resolve(__dirname, DIR, 'style'))
      fse.copySync(
        path.resolve(__dirname, 'src/style'),
        path.resolve(__dirname, DIR, 'style')
      )

      // generate a .js file to require matched .scss file in every component directory and copy it
      const destPath = path.join(__dirname,
        DIR,
        dir.replace(/[^\/]+\//, '')
      )
  
      fse.copyFileSync(
        path.resolve(__dirname, file),
        path.resolve(
          destPath,
          base
        )
      )
  
      mkdirp.sync(path.resolve(destPath, 'style'))
      fs.writeFileSync(path.resolve(destPath, 'style', 'index.js'), `require ('../index.scss')`)
    // })

  })
}