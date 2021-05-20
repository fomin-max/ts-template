const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const REACT_APP = /^REACT_APP_/i

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                module: 'esnext',
                target: 'es5',
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(zpt|png|svg|gif|glb|gltf|jpe?g|ogg|mp3|obj|fbx|wav|ttf|fnf|woff|stl|mp4|hdr|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/media/',
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: 'public' }] }),
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env)
        .filter((key) => REACT_APP.test(key))
        .reduce(
          (env, key) => {
            env[key] = JSON.stringify(process.env[key])

            return env
          },
          {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          },
        ),
    }),
  ],
}
