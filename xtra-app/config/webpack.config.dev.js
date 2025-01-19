const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      'buffer': false,
      'util': false,
      'assert': false,
      'url': false,
      'net': false,
      'crypto': false,
      'dns': false,
      'tls': false,
      'stream': false,
      "events":false
    }
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname,'../src/app/assets/images'), to: 'assets/images' },
        { from: path.resolve(__dirname,'../src/app/assets/css'), to: 'assets/css' }
      ]
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }
  },
};