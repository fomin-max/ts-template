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
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: 'src/public' }]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true,
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    }),
  ],
};
