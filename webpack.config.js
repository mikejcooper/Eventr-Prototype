// Webpack is a Node module loader

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  // Location of files
  context: path.join(__dirname, "src"),
  // If running in debug mode, run inline-sourcemap which helps with console logging etc..
  devtool: debug ? "inline-sourcemap" : null,
  // Entry point
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        // All node js (.jsx) files are run through the babel loader
        test: /\.jsx?$/,
        // With exception of ...
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // Babel loader transpiles react, es6 & bleeding edge features. 
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  // Output for reduced/combined Javascript files 
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  // If debug, no pluigns. Else ...
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // Removes comments and makes code production ready. 
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
