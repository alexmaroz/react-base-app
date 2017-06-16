const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const loaders = require('./loaders');
const plugins = require('./plugins');
const config = require('./config');
const package = require('../package.json');

const packagesToIncludeNames = Object.keys(package.dependencies);

console.log(process.env.PORT);

let configObj = {
  bail: true,
  devtool: config.isProd() ? 'source-map' : 'cheap-module-source-map',
  entry: {
    app: './src/index.tsx',
    vendors: packagesToIncludeNames
  },
  output: {
    filename: `${config.jsOutput}/[name].bundle${config.isProd() ? '.[chunkhash].min' : ''}.js`,
    path: path.resolve(__dirname, '../', config.outputPath),
    // publicPath: '/'
  },
  devServer: {
    host: config.host,
    port: config.port,
    //contentBase: [config.OUTPUT_PATH, pathPublicDir],
    historyApiFallback: true
  },
  resolve: {
    modules: [
      path.resolve(path.resolve(__dirname, '..'), 'src'),
      path.resolve(path.resolve(__dirname, '..'), 'node_modules')
    ],
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

if (config.isHmrEnabled()) {
  console.log('Inside');
  configObj = merge(
    {
      entry: {
        app: [
          `webpack-dev-server/client?${config.clientServerUri}`,
          'webpack/hot/only-dev-server'
        ]
      }
    },
    configObj,
    {
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    {
      module: {
        loaders: [
          loaders.hotLoader
        ]
      }
    }
  );
}

console.log(configObj)

module.exports = configObj;