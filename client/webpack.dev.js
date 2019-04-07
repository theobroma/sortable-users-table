const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

// the path(s) that should be cleaned
let pathsToClean = ['dist/*.js', 'dist/*.map'];
const assetsPath = path.resolve(__dirname, './dist');
// the clean options to use
let cleanOptions = {
  verbose: true,
  dry: false,
  beforeEmit: true,
};

const config = {};

config.devServer = {
  contentBase: assetsPath,
  historyApiFallback: true,
  open: true,
  overlay: true,
  stats: 'minimal',
};

//config.devtool = 'cheap-module-eval-source-map';
config.devtool = 'source-map';

config.plugins = [
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require(path.join(assetsPath, '/dll/vendor-manifest.json')),
  }),
  new WriteFilePlugin(),
];

module.exports = merge(common, config);
