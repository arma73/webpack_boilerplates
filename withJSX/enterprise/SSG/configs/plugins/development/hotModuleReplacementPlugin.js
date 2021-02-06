"use-strict";

// Core
const { HotModuleReplacementPlugin } = require("webpack");

/**
 * Enables Hot Module Replacement, otherwise known as HMR.
 */
module.exports = () => [
    new HotModuleReplacementPlugin()
];
