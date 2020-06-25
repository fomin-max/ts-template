/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    https: true,
    port: 8551,
    open: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8300',
        changeOrigin: true,
        secure: false,
      },
    },
    contentBase: path.resolve('dist'),
  },
});
