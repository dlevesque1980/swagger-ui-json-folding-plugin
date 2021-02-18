const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    "swagger-ui-json-folding-plugin": "./src/index.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
    library: 'jsonFoldingPlugin',
  }
};