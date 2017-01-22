var webpack = require('webpack')
var path = require('path');
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration'))
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, 
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('style_modules'),
        loader: ExtractTextPlugin.extract('style-loader','css!autoprefixer!sass'),
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
         NODE_ENV: JSON.stringify("production") 
       }
    }),
    new ExtractTextPlugin("styles.css"),
    webpack_isomorphic_tools_plugin,
  ],
  resolve: {
    alias: {
      'extensible-runtime': path.join(__dirname, 'node_modules', 'extensible-runtime'),
      'react': path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom')
    },
    extensions: ['', '.js','.json']
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  }
};