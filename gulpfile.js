const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('default', () =>
  gulp.src('./src/konami-code.js')
    .pipe(babel({ presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(rename('konami-code.min.js'))
    .pipe(gulp.dest('.'))
);
