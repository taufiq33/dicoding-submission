const path = require('path');
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : [{loader: "style-loader"}, {loader: "css-loader"}]
            },
        ]
    },
    plugins : [
        new HTMLPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ]
}