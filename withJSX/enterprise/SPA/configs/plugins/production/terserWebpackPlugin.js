"use-strict";

// Core
const TerserPlugin = require("terser-webpack-plugin");

/**
 * Allows you to override the default minimizer by providing a different one or more customized TerserPlugin instances.
 */
module.exports = () => [
    new TerserPlugin({
        // Test to match files against.
        "test": /\.js(\?.*)?$/i,
        // Use multi-process parallel running to improve the build speed. Default number of concurrent runs: os.cpus().length - 1.
        "parallel": true,
        "extractComments": false,
    })
];
