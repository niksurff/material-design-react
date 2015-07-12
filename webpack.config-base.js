var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',

  devtool: 'source-map',

  // debug: true,
  // profile: true,

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
  ]
};
