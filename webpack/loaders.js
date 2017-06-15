module.exports = {
  tsLoader: {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader'
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