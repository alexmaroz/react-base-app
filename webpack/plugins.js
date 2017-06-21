const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const config = require('./config');

const getPlugins = () => {

  let plugins = [
    new CheckerPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: config.appHtml,
    })
  ];

  if (config.isProd()) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}

module.exports = {
  getPlugins
}