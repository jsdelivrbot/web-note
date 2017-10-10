// webpack config

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const test_config = require('./webpack.test.config.js');
const demo_config = require('./webpack.demo.config.js');

// 学习测试test

const config = test_config;

// 正式config 

// const config = demo_config;

config.module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
  ]
};

config.resolve = {
  extensions: ['.js'],
  alias: {
    public: path.resolve(__dirname, './public'),
  }
}

const html_temp = new HtmlWebpackPlugin({
  title: 'Output Management',
  template: path.resolve(__dirname, 'template.html'),
})
config.plugins.push(html_temp)

config.devtool = 'inline-source-map' // 用于开发阶段的debug

module.exports = config;
