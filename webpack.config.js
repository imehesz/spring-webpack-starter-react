// var debug = process.env.NODE_ENV !== "production";
//
// var postcssImport   = require("postcss-import");
// var postcssCssNext  = require("postcss-cssnext");

var webpack = require("webpack");
var context = __dirname + "/src/main/webapp";

module.exports = {
  entry: context + '/js/index.js',
  devtool: null,
  output: {
    filename: 'bundle.min.js',
    path: context + "/deploy"
  },

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ["babel?presets[]=es2015"]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react']
      },

      {
        test: /\.rt\.html$/,
        loaders: ["babel?presets[]=es2015", "react-templates-loader?modules=es6"],
        exclude: /node_modules/
      },
    ]
  }
};
