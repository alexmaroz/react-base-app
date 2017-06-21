module.exports = {
  tsLoader: {
    test: /\.(t|j)sx?$/,
    use: 'awesome-typescript-loader',
    exclude: /node_modules/
  },

  sourceMapLoader: {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
  },

  cssLoader: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },

  scssLoader: {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },

  hotLoader: {
    test: /\.tsx?$/,
    loaders: ['react-hot-loader/webpack']
  }
}