const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './out'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    alias: {
      '_Components': path.resolve(__dirname, './src/components/')
    }
  }


};