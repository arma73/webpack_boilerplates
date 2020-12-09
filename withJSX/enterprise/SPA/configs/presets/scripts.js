"use-strict";

// Helpers
const { development } = require("../helpers/options");

// Loaders
const sourceMapLoader = require("../loaders/sourceMapLoader");
const babelLoader = require("../loaders/babelLoader");
const cacheLoader = require("../loaders/cacheLoader");
// const nullLoader = require("../loaders/nullLoader");
// TODO: Test profit
const threadLoader = require("../loaders/threadLoader");

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
