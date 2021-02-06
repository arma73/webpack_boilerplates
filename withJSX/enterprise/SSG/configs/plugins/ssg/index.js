"use-strict";

// Plugins
const cleanWebpackPlugin = require("./cleanWebpackPlugin");
const webpackPwaManifest = require("./webpackPwaManifest");
const SSGWebpackPlugin = require("./SSGWebpackPlugin");
const redirectWebpackPlugin = require("./redirectWebpackPlugin");
// TODO: make npm package
const precacheSsgManifestPlugin = require("./precacheSsgManifestPlugin");

module.exports = {
    "plugins": [
        ...cleanWebpackPlugin(),
        ...SSGWebpackPlugin(),
        ...webpackPwaManifest(),
        ...redirectWebpackPlugin(),
        ...precacheSsgManifestPlugin()
    ].filter(Boolean),
};
