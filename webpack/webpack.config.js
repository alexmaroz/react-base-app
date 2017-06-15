const webpack = require('webpack');
const path = require('path');

const loaders = require('./loaders');
const plugins = require('./plugins');
const config = require('./config');
const package = require('../package.json');

const packagesToIncludeNames = Object.keys(package.dependencies);

module.exports = {
  entry: {
    app: './src/index.ts',
    vendors: packagesToIncludeNames
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, '../', config.outputPath)
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
  plugins: plugins.getPlugins()
};