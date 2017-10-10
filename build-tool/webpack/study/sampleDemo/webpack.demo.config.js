// webpack config

const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
};
