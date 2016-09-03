var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

var srcDir = 'public_src';
var outputDir = 'public';

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: {
    app: path.resolve(srcDir, 'scripts/app.js')
  },
  output: {
    path: outputDir,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.less', '.css', '.html']
  },
  eslint: {
    configFile: './.eslintrc.js',
    quiet: true,
    failOnError: true
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
          plugins: ['syntax-decorators', 'ng-annotate']
        },
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(png|gif|jpg)$/, loader: 'file?name=images/[name].[ext]' },
      // For font-awesome, created by Turbo87:
      // https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      Pbf: 'pbf',
      vectorTile: 'vector-tile',
      geojsonvt: 'geojson-vt',
      SphericalMercator: 'sphericalmercator',
      JSONEditor: 'jsoneditor',
      'window.JSONEditor': 'jsoneditor'
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(srcDir, 'views/index.html'),
      inject: true
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
