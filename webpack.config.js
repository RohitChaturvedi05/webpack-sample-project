"use strict"
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js"

    },
    watch: true,
    plugins: [
        new htmlWebpackPlugin({
            title: "webpack sample",
            filename: 'index.html',
            template: "./src/index.html",
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "styles.css",
            disable: false,
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: "/dist"
                })
            }
        ]

    }

};