const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const _src = path.resolve(__dirname, 'src');
const _dir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(_src, 'app.js'),
    loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader']},
        {test: /\.scss$/, exclude: /node_modules/, loaders: ['css-loader', 'style-loader', 'sass-loader']},
        {test: /\.(png|gif|jpe?g)$/, exclude: /node_modules/, loaders: ['file-loader']}
    ],
    output: {
        filename: 'app.bundle.js',
        path: _dir
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(_src, 'app.html'),
            filename: 'index.html',
            inject: 'body',
        })
    ]
}