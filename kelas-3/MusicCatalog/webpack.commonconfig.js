const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js",
        assetModuleFilename: 'assets/fonts/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    { loader: 'file-loader?name=./assets/images/[name].[ext]' },
                    { loader: 'image-webpack-loader?bypassOnDebug' }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/, 
                type: 'asset/resource',
            }
        ]
    },
    plugins : [
        new HTMLPlugin({
            template: "./src/index.html",
            filename: "index.html",
            favicon: './src/assets/images/favicon.png',
            minify: "production"
        }),
        new MiniCssExtractPlugin({
            filename: "./assets/css/[name].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
    ]
}
