"use-strict";

// Core
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Helpers
const { analyze } = require("../../helpers/options");

module.exports = () => {
    if (!analyze) {
        return [];
    }

    return [
        new BundleAnalyzerPlugin({
            "analyzerMode": "static",
        })
    ];
};
