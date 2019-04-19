/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.((s*)css|sass)$/,
        exclude: path.resolve(__dirname, 'src/app'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options:{
              url:false,
            }
          },
        ],
      },
      {
        test: /\.((s*)css|sass)$/,
        include: path.resolve(__dirname, 'src/app'),
        loader: 'raw-loader'
    },
    {
        test: /\.eot$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            loader: "file-loader",
            options: {
              regExp: /(\\src\\)(\S+)(\\\S+\.\S+)/,
              name: "[2]/[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              regExp: /(\\src\\)(\S+)(\\\S+\.\S+)/,
              name: "[2]/[name].[ext]",
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    // new CleanWebpackPlugin("./dist", {}),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: "src/img/",
        to: "img/"
      },
    ])
  ],
};
