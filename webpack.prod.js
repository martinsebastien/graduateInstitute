const { DefinePlugin, optimize: { UglifyJsPlugin } } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const path = require('path');

const wp_theme_name = 'graduateinstitute-react';

const _src = path.resolve(__dirname, 'src');
const _dist = path.resolve(__dirname, 'dist');
const _wp = path.resolve(__dirname, 'wp_theme');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(_src, 'app.js'),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.s?css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|gif|jpe?g|svg)$/, loader: 'file-loader', query: { name: '[name]-[md5:hash:hex:8].[ext]', publicPath: `wp-content/themes/${wp_theme_name}/assets/`, outputPath: 'assets/' } },
    ],
  },
  output: {
    filename: 'app.bundle.js',
    path: _dist,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(_src, 'app.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      {
        from: _wp,
        to: _dist,
      },
    ]),
    new DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new UglifyJsPlugin(),
    new ZipWebpackPlugin({
      filename: `${wp_theme_name}.zip`,
    }),
  ],
};

