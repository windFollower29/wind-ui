

const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(postcss([ autoprefixer() ]))
  .pipe( gulp.dest('win') )
})

