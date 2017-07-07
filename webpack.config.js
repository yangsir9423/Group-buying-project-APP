let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new ExtractTextWebpackPlugin('bundle.css');
module.exports = {
    entry: {
        index:'./app/index.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {presets: ["es2015", "stage-0", "react"]},
                exclude: /node_modules/
            },
            {test: /\.less$/, use:extract.extract(["css-loader", {
                loader:'postcss-loader',
                options:{
                    plugins:[
                        require('autoprefixer')
                    ]
                }
            },"less-loader"])}
        ]
    },
    plugins: [
        extract,
        new HtmlWebpackPlugin({template: "./app/index.html"}),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
    ],
    devtool: "source-map",//可以提示源码错误而非bundle.js
    devServer: {
        hot:true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
}