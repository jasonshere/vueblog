const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    mode: "development",
    output: {
        path: path.join(__dirname, "./dist/"),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 3000,
        host: '0.0.0.0',
        contentBase: "./",
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./index.html"),
            filename: path.join(__dirname, "./dist/index.html")
        })
    ],
    module: {
        rules: [
            { test: /\.html$/, use: "html-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader?limit=1&name=[hash:16]-[name].[ext]' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    }   
}