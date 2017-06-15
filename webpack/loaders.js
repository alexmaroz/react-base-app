module.exports = {
  tsLoader: {
    test: /\.ts(x)?$/,
    use: 'awesome-typescript-loader'
  },

  cssLoader: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  
  scssLoader: {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
}