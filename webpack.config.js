var webpack = require('./node_modules/webpack')
var path = require('./node_modules/path');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
};
