const path = require('path')
const { merge } = require('webpack-merge')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'static/js/[name]bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          'css-loader',
        ],
      },
    ],
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
    port: 8787,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    proxy: {
      '/api': {
        target: process.env.REACT_APP_BACKEND_URL,
        changeOrigin: true,
        secure: true,
      },
    },
    contentBase: path.resolve('dist'),
  },
})
