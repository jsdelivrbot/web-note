// webpack config

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_PATH = 'dist'

const config = {
   entry:{
    app: './app/index.js', 
    // test: './app/test.js',
    // print: './test/print.js',
    vendor: [
      'lodash'
    ] // 抽出公共部分代码进行缓存
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/' + BUILD_PATH + '/'  // 由于项目index.html在publicPath中，查看 http://localhost:3000/dist_test/
  },
  module: {
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
  },  
  resolve: {
    extensions: ['.js'],
    alias: {
      public: path.resolve(__dirname, './public'),
    }
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']), // 清除 测试dist
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'template.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({ //缓存
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({ //模块分离到单独的文件
      name: 'runtime'
    })
  ]
}

module.exports = config;
