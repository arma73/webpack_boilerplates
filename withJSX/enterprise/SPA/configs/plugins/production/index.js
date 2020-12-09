"use-strict";

// Plugins
const webpackBar = require("./webpackBar");
const webpackPlugins = require("./webpackPlugins");
const webpackBundleAnalyzer = require("./webpackBundleAnalyzer");
// const workboxWebpackPlugin = require("./workboxWebpackPlugin");

module.exports = {
    "plugins": [
        ...webpackBar(),
        ...webpackPlugins(),
        ...webpackBundleAnalyzer(),
        // ...workboxWebpackPlugin()
    ].filter(Boolean),
};
