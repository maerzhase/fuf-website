var webpack = require('webpack')
var path = require('path');
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration')).development()

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8000/'
  },
  module: {
    loaders: [ 
      {
        test: /\.js$/, 
        //exclude: /node_modules(?!\/zelda-v2)/,
        exclude: /node_modules/,
        loader: 'babel'
      }, 
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('style_modules'),
        loader: 'style!css!autoprefixer!sass'
      }, 
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('data'),
        loader: 'file'
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('images'),
        loader: 'file'
      }, 
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('videos'),
        loader: 'file'
      }, 
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('fonts'),
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("development") 
       }
    }),
    new webpack.HotModuleReplacementPlugin(),
    webpack_isomorphic_tools_plugin,
  ],
  resolve: {
    alias: {
      'extensible-runtime': path.join(__dirname, 'node_modules', 'extensible-runtime'),
      'react': path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom'),
      'webworkify': 'webworkify-webpack-dropin',
      'gl-matrix': path.resolve('./node_modules/gl-matrix/dist/gl-matrix.js'),
    },
    root: path.join(__dirname, "node_modules"),
    extensions: ['', '.js','.json']
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules"),
  },
  node: {
    fs: 'empty',
  },
};