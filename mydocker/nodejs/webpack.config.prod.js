const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.tsx'
  },output: {
    filename: '[name].[contenthash:8].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
  },
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "static/images/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname,'./public/images'), to: 'assets/images' },
        { from: path.resolve(__dirname,'./public/fonts'), to: 'assets/fonts' },
        { from: path.resolve(__dirname,'./public/css'), to: 'assets/css' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/compiled/[name].[contenthash:8].css",

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: false,
      favicon: './public/favicon.ico', 
    })
  ],
  
};