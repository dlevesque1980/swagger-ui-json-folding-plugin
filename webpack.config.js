const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "swagger-ui-json-folding-plugin" : "./src/index.js"
    },
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
		minimizer: [new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true
            })],
	},	
	devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js',
        library: 'jsonFoldingPlugin',
    },
    devServer: {
        contentBase: './demo',
		port:9000
    }
};