// webpack config

const webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_PATH = 'dist_test'


module.exports = {
  entry:{
    app: './test/index.js',
    // print: './test/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_test'),
    filename: '[name].bundle.js',
    publicPath: '/' + BUILD_PATH + '/'  // 由于项目index.html在publicPath中，查看 http://localhost:3000/dist_test/
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist_test']), // 清除 测试dist
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist_test"),
    compress: true,
    hot: true,
    port: 9000
  }
};
