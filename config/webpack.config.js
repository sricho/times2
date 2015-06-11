var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    publicPath: 'http://localhost:8080/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions!sass'
      },
      {
        test: /\.png$/,
        loader: "url?limit=100000&mimetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: "url?limit=100000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif$/,
        loader: "url?limit=100000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "file"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/template.html',
    })
  ]
};