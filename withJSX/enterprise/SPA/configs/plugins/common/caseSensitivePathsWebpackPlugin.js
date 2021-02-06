"use-strict";

// Core
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

/**
 * This Webpack plugin enforces the entire path of all required
 * modules match the exact case of the actual path on disk.
 */
module.exports = () => [
    new CaseSensitivePathsPlugin(),
];
