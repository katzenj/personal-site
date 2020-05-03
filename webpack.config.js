const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// new webpack.DefinePlugin({});

module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  /* For Flask Python Routing */
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    },
    {
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
    },
    {
      test: /\.module\.scss$/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localsConvention: 'camelCase',
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module.scss$/,
      loader: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.SPACE_ID': JSON.stringify(process.env.SPACE_ID),
      'process.env.ACCESS_TOKEN': JSON.stringify(process.env.ACCESS_TOKEN)
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      static: path.resolve(__dirname, 'static')
    },
    extensions: ['.jsx', '.js', '.scss']
  }
};
