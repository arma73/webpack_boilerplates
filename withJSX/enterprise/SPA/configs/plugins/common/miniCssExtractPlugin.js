"use-strict";

// Core
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Helpers
const { development } = require("../../helpers/options");

/**
 * This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. 
 * It supports On-Demand-Loading of CSS and SourceMaps.
 */
module.exports = () => [
    new MiniCssExtractPlugin({
        "ignoreOrder": false,
        "chunkFilename": development 
            ? "styles/[name].css"
            : "styles/[name].[chunkhash].css",
        "filename": development
            ? "styles/[name].css"
            : "styles/[name].[contenthash].css",
    })
];
