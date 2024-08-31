const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "swagger-ui-json-folding-plugin.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'lit-css-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}