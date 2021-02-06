"use-strict";

// Core
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");

// This plugin uses cssnano to optimize and minify your CSS.
// 
module.exports = () => [
    new OptimizeCSSAssetsPlugin({})
];
