var webpack = require('./node_modules/webpack')
var path = require('./node_modules/path');

module.exports = {
  entry: [
    './src/index.js'
    //'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                    //{ loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(svg|png|jpg)$/,
                use: 'url-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            }
        ]
    }
};
