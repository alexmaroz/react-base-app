var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

var loaders = require('./loaders');
var package = require('../package.json');

const packagesToIncludeNames = Object.keys(package.dependencies);

module.exports = {
  entry: {
    app: './src/index.ts',
    vendors: packagesToIncludeNames
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['js', 'jsx', 'ts', 'tsx']
  },
  module: {
    rules: [
      loaders.tsLoader,
      loaders.cssLoader,
      loaders.scssLoader
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};