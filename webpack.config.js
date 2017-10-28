module.exports = {
    entry: {
        "swagger-ui-json-folding-plugin" : "./src/index.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'       
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/demo',
        publicPath: '/',
        filename: '[name].js',
        library: 'jsonFoldingPlugin',
    },
    devServer: {
        contentBase: './demo',
    }
};