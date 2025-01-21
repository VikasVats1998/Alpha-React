import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development', // Set the mode to 'development' or 'production'
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js', // Use [name] to ensure unique filenames
    chunkFilename: '[name].bundle.js', // Enable code splitting
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.resolve('dist')
    },
    compress: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};