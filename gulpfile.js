

const gulp = require('gulp')
// const sass

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
    // .pipe(gulp.dest('sass_dist'))
    .pipe(
      gulp.dest((a, b) => {
        console.log(a, b)
        return 'sass_lib' + a
      })
    )
})

