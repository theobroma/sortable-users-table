'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {};
config.entry = __dirname + '/src/app/app.jsx';
config.output = {
  path: __dirname + '/dist',
  filename: '[name].[hash].js'
};
config.resolve = {
  extensions: ['.js', '.jsx', '.css']
};

// config.devtool = 'eval-source-map';
//config.devtool = 'cheap-module-eval-source-map';

config.module = {
  rules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader'
        // options: {
        //   presets: ['env', 'react', 'stage-0']
        // }
      },
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      use: 'file-loader'
    },
    {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { minimize: true } },
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-cssnext')(),
                require('cssnano')(),
                require('postcss-reporter')({ clearReportedMessages: true })
              ]
            }
          }
        ]
      })
    }
  ]
};

config.externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: __dirname + '/src/public/index.html',
    inject: 'body'
  }),
  new CopyWebpackPlugin([
    {
      from: __dirname + '/src/public'
    }
  ]),
  new ExtractTextPlugin({ filename: 'css/[name].css' })
];

config.devServer = {
  contentBase: './src/public',
  open: true,
  overlay: true,
  stats: 'minimal'
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'cheap-module-eval-source-map';
  }

  if (argv.mode === 'production') {
    config.devtool = 'none';
    config.optimization = {
      minimize: false
    };
  }

  return config;
};
