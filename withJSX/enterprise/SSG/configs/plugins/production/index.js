"use-strict";

// Plugins
const webpackBar = require("./webpackBar");
const webpackPlugins = require("./webpackPlugins");
const webpackBundleAnalyzer = require("./webpackBundleAnalyzer");
const workboxWebpackPlugin = require("./workboxWebpackPlugin");
const provideAssetsPlugin = require("./provideAssetsPlugin");

module.exports = {
    "plugins": [
        ...webpackBar(),
        ...webpackPlugins(),
        ...webpackBundleAnalyzer(),
        ...workboxWebpackPlugin(),
        ...provideAssetsPlugin()
    ].filter(Boolean),
};
