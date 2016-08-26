const gulp = require('gulp');
const gulpif = require('gulp-if');
const sprity = require('sprity');
const clean = require('gulp-clean');

const PATHS = {
  src: './_src',
  dest: './dest'
};

const name = 'asl-sprite';

gulp.task('clean', () => {
  return gulp.src(`${PATHS.dest}/**/*`, {read: false})
    .pipe(clean());
})

gulp.task('default', ['clean'], () => {
  return sprity.src({
    src: `${PATHS.src}/**/*.{png,jpg,gif}`,
    style: `./${name}.css`,
    cssPath: './',
    prefix: name,
  })
  .pipe(gulpif('*.png', gulp.dest(`${PATHS.dest}`), gulp.dest(`${PATHS.dest}`)))
});