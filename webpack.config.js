const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require("webpack");
const dotenv = require('dotenv')


const htmlPlugin = new HtmlWebPackPlugin({
 template: './public/index.html',
 filename: './index.html'
});

module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
  path: path.resolve(__dirname, "public"),
  filename: "main.js"
},
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: 'babel-loader'
   },
 },
  {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
  }
]},
 plugins: [htmlPlugin,
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env.API_KEY)
 })
],

};