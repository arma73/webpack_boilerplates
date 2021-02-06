"use-strict";

// Helpers
const { development } = require("../helpers/options");

// Loaders
const sourceMapLoader = require("../loaders/sourcemap-loader");
const babelLoader = require("../loaders/babel-loader");
const cacheLoader = require("../loaders/cache-loader");
// const nullLoader = require("../loaders/null-loader");
// TODO: Test profit
const threadLoader = require("../loaders/thread-loader");

module.exports = () => [
    {
        "test": /\.(js)x?$/,
        "enforce": "pre",
        "exclude": /(node_modules)/,
        "use": [
            sourceMapLoader(),
        ],
    },
    {
        "test": /\.(js)x?$/,
        "exclude": /node_modules/,
        "use": [
            ...(development ? [cacheLoader()] : []),
            threadLoader("js"),
            babelLoader(),
        ],
    }
    // {
    //     "test": /\.js?$/,
    //     "include": [].map(fileName => resolve(`node_modules/.../${fileName}`)),
    //     "use": [
    //         nullLoader(),
    //     ],
    // },
];
