const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getClientEnvironment = require('./env.config');

const isProduction = process.env.NODE_ENV === 'production';
const env = getClientEnvironment('./');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
  }),
  new webpack.ProvidePlugin({
    Promise: 'es6-promise-promise',
  }),
  new webpack.DefinePlugin(env.stringified),
];

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/src/],
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [/src/],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|gif|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'scripts'),
    publicPath: '/',
    filename: isProduction ? '[name].[hash].js' : 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    contentBase: path.join(__dirname, 'public/'),
    hot: true,
    historyApiFallback: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      children: false,
    },
  },
  plugins,
  devtool: isProduction ? undefined : 'source-map',
  performance: { hints: false },
};
