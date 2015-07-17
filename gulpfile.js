var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var eslint = require('gulp-eslint');

// CONSTANTS =======================================================================

// TASKS ======================================================================
gulp.task('default', ['build-modules']);

gulp.task('clean', function(cb) {
  del(['./lib'], cb);
});

gulp.task('build-modules', ['clean'], function () {
    return gulp.src('src/**/*.js?(x)')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(gulp.dest('lib/'));
});
