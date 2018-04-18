const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve('src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
    historyApiFallback: true,
  }
};

module.exports = config;
