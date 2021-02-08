"use-strict";

// Core
const { sep } = require("path");

// Paths
const { servedPath } = require("./paths");

// Utils
const parseArguments = require("../utils/parseArguments");

// Environment
const { isModern, environment } = require("./env");

const argv = parseArguments(process.argv);
const prefix = isModern
    ? "modern"
    : "fallback";

const production = environment === "production";
const development = environment === "development";

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
// In development, we always serve from the root. This makes config easier.
const publicPath = production
    ? servedPath
    : development && sep;

const hashName = production
    ? "[name].[chunkhash:6].[id]"
    : "[name].[fullhash:6].[id]";

module.exports = {
    prefix,
    hashName,
    publicPath,
    production,
    development,
    "preload": false,
    "sourceMap": false,
    "prefetch": ["**/*.js"],
    "analyze": argv.analyze || false,
    "compression": argv.release || false,
    "release": argv.release || argv.analyze || false,
};
