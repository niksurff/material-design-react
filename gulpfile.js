var gulp = require('gulp');
var gutil = require('gulp-util')
var babel = require('gulp-babel');
var del = require('del');
var eslint = require('gulp-eslint');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");

// DISTRIBUTION

gulp.task('default', ['build']);

// todo update .gitignore
gulp.task('build', function () {
    return gulp.src('src/**/*.js?(x)')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(gulp.dest('./'));
});


// DEVELOPMENT

gulp.task('serve', ['prep-examples'], function(cb) {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: '/',
    contentBase: './examples',
    info: false,
		stats: {
      chunks: false,
			colors: true
		},
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});

gulp.task("webpack", ['prep-examples'], function(cb) {
	webpack(webpackConfig).run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true,
      chunks: false
		}));
		cb();
	});
});

gulp.task('prep-examples', ['clean-examples'], function(cb) {
  // move index
  return gulp.src('src/examples/index.html')
    .pipe(gulp.dest('examples/'))
});

gulp.task('clean-examples', function(cb) {
  del(['./examples'], cb);
});
