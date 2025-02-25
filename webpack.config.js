const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
},
mode: 'development',
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
},
  module:{
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
},
  mode: "development",
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: "To do List",
      })
  ]
};