const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'App:Development',
      favicon: './public/favicon.ico',
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
    },
    client: {
      overlay: false, // <- add this
    }
  },
};