const {merge} = require("webpack-merge");
const common = require("./webpack.commonconfig.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {loader: "babel-loader", options : {
                        presets: ["@babel/preset-env"]
                    }}
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                      comments: false,
                    },
                  },
            })
        ]
    }
});