const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

const config = {};

config.devtool = 'none';
//turn off minimize and UglifyJSPlugin to see pretty output bundle
config.optimization = {
  minimize: true
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new UglifyJSPlugin({
    cache: true,
    parallel: true,
    uglifyOptions: {
      output: {
        comments: false,
        beautify: false
      },
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }
  }),
  new OptimizeCSSAssets()
];

module.exports = merge(common, config);
