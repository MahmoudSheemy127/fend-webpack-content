const path = require("path")
const webpack = require("webpack")
const htmlWebPackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode:'development',
    entry: './src/client/index.js',
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:'/\.json$/',
                loader: "cson-loader"
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template:"./src/client/views/index.html",
            filename: "./index.html"
        }),
        new BundleAnalyzerPlugin()
    ]
}