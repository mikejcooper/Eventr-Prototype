import path from 'path'
import webpack from 'webpack';



export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]
      }, 
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }, {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },{
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'url?limit=8192',
              'img'
          ]
      },
    ]
  },
  resolve: {
    extentions: [ '', '.js', '.less', '.css'], 
    modulesDirectories: [
          'node_modules'
        ]  
  }
}

// const autoprefixer = require('autoprefixer')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const path = require('path')

// const sassLoaders = [
//   'css-loader',
//   'postcss-loader',
//   'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
// ]

// const config = {
//   entry: {
//     app: ['./src/index']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loaders: ['babel-loader']
//       },
//       {
//         test: /\.sass$/,
//         loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
//       }
//     ]
//   },
//   output: {
//     filename: '[name].js',
//     path: path.join(__dirname, './build'),
//     publicPath: '/build'
//   },
//   plugins: [
//     new ExtractTextPlugin('[name].css')
//   ],
//   postcss: [
//     autoprefixer({
//       browsers: ['last 2 versions']
//     })
//   ],
//   resolve: {
//     extensions: ['', '.js', '.sass'],
//     root: [path.join(__dirname, './src')]
//   }
// }
