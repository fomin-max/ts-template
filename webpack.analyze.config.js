/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
