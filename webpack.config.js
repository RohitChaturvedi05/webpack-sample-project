"use strict"
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');


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
        })
    ],
    loader: [

    ]

};