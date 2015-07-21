/*
 * This file configures the examples application's webpack build
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/examples/index.js'
  },

  output: {
    path: path.join(__dirname, 'examples'),
    filename: '[name].js',
		chunkFilename: '[chunkhash].js',
    sourceMapFilename: 'debug/[file].map',
  },

  devtool: '#cheap-module-source-map',

  debug: true,

  module: {
    loaders: [
      // JS(X)
      {test: /\.(jsx?(\?.*)?)$/, loaders: ['babel?stage=0'], exclude: /node_modules/},
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  stats: {
    chunks: false
  }
};
