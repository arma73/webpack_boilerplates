"use-strict";

// Core
const SSGWebpackPlugin = require("static-site-generator-webpack-plugin");
const { join } = require("path");
const raf = require("raf");

// Helpers
const { appSrc } = require("../../helpers/paths");

// Utils
const flattenContentTree = require("../../utils/flattenContentTree");

const contentTree = require(join(appSrc, "settings", "_content.json"));

// content tree to path array
const paths = [
    ...flattenContentTree(contentTree)
];

module.exports = () => [
    new SSGWebpackPlugin({
        "globals": {
            "window": {
                "__ssgrun": true,
                "requestAnimationFrame": raf, // requestAnimationFrame polyfill for node [use: react-spring].
            }
        },
        paths,
        "locals": {
            "content": contentTree
        }
    }),
];
