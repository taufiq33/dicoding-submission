const path = require('path');
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{ loader: 'file-loader?name=./assets/[name].[ext]' }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                type: 'asset/resource',
            }
        ]
},
    plugins : [
        new HTMLPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}