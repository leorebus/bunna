const path = require('path')
const webpack = require('webpack')
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin(
    'commons',
    'common.js'
);

module.exports = {
  devtool: 'eval',

  entry: {
    main: ['webpack-hot-middleware/client', './src/index'],
    project: ['webpack-hot-middleware/client', './src/project']
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]-bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    commonsPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.jpg$/,
        loader: "file-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}
