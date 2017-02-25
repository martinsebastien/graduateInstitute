const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const _src = path.resolve(__dirname, 'src');
const _dir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(_src, 'app.js'),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.s?css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|gif|jpe?g|svg)$/, loader: 'file-loader', query: { publicPath: 'assets/', outputPath: 'assets/' } },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: 'app.bundle.js',
    path: _dir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(_src, 'app.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
