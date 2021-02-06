"use-strict";

// Core
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Helpers
const { production, preload, prefetch } = require("../../helpers/options");
const { appHtml, appBuild } = require("../../helpers/paths");
const { "areaEnv": { REACT_APP_NAME, REACT_APP_DESCRIPTION } } = require("../../helpers/env");

// Mocks
const htmlMinify = require("../../mocks/htmlMinify");

const options = production
    ? {
        preload,
        prefetch,
        "hash": false,
        "cache": true,
        "inject": true,
        "compile": false,
        "production": production,
        // chunksSortMode: 'dependency',
        "minify": {
            ...htmlMinify,
        }
    }
    : {
        "minify": false
    };

/**
 * The HtmlWebpackPlugin simplifies creation of HTML files to serve 
 * your webpack bundles. This is especially useful for webpack bundles that
 * include a hash in the filename which changes every compilation. 
 */
module.exports = () => [
    new HtmlWebpackPlugin({
        "inject": true,
        "appMountId": "app",
        "template": appHtml,
        "filename": "index.html",
        "build": "." || appBuild, // TODO: Correct later
        "excludeAssets": [/runtime.*.js/],
        "title": REACT_APP_NAME, //
        "description": REACT_APP_DESCRIPTION,
        ...options,
    }),
];
