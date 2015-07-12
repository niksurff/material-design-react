var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfigBase = require('./webpack.config-base.js');
var del = require('del');
var objectAssign = require('object-assign')
// var eslint = require('gulp-eslint');

// CONSTANTS =======================================================================
var LIB_ENTRY = './src/lib/index.js';
var LIB_OUTPUT_PATH = path.join(__dirname, 'lib');
var LIB_NAME = 'MaterialDesignReact';
var LIB_TARGET = 'umd';

var EXAMPLES_ENTRY = './src/examples/main.js';
var EXAMPLES_OUTPUT_PATH = path.join(__dirname, 'examples');

// TASKS ======================================================================
gulp.task('default', ['build-package', 'build-modules', 'build-examples']);

gulp.task('clean', function(cb) {
  del(['./examples', './lib'], cb);
});

gulp.task('build-modules', function () {
    return gulp.src('src/lib/**/!(index).js?')
        // .pipe(eslint())
        // .pipe(eslint.failOnError())
        .pipe(babel({stage: 0}))
        .pipe(gulp.dest('lib/'));
});

gulp.task("build-package", function(cb) {
    var config = objectAssign({}, webpackConfigBase, {
      entry: {
        index: LIB_ENTRY
      },
      output: {
        path: LIB_OUTPUT_PATH,
        filename: '[name].js',
        sourceMapFilename: 'debug/[file].map',
        library: LIB_NAME,
        libraryTarget: LIB_TARGET,
        pathinfo: true
      },
      externals: [
        {react: 'react'}
      ]
    });

    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        cb();
    });
});


gulp.task('move-examples-index', function() {
  return gulp.src('src/examples/index.html')
    .pipe(gulp.dest('examples/'));
});

gulp.task("build-examples", ['move-examples-index'], function(cb) {
    config = objectAssign({}, webpackConfigBase, {
      entry: {
        bundle: EXAMPLES_ENTRY
      },
      output: {
        path: EXAMPLES_OUTPUT_PATH,
        filename: '[name].js',
        sourceMapFilename: 'debug/[file].map',
        pathinfo: true,
      }
    });

    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        cb();
    });
});
