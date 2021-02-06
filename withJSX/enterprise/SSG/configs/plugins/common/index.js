"use-strict";

// Plugins
const copyWebpackPlugin = require("./copyWebpackPlugin");
const caseSensitivePathsWebpackPlugin = require("./caseSensitivePathsWebpackPlugin");
const webpackPlugins = require("./webpackPlugins");
const miniCssExtractPlugin = require("./miniCssExtractPlugin");

module.exports = {
    "plugins": [
        ...copyWebpackPlugin(),
        ...caseSensitivePathsWebpackPlugin(),
        ...webpackPlugins(),
        ...miniCssExtractPlugin()
    ].filter(Boolean),
};
