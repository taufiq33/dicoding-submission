const {merge} = require("webpack-merge");
const common = require("./webpack.commonconfig.js");

module.exports = merge(common, {
    mode: "development"
});