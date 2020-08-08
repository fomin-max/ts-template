/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
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
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      { test: /.css$/, exclude: /src/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.svg$/,
        use: {
          loader: 'react-svg-loader',
          query: {
            es5: true,
            svgo: { plugins: [{ removeTitle: false }] },
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|json|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: 'src/public' }]),
    // new CopyPlugin([{ from: 'src/assets' }]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true,
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    }),
  ],
};
