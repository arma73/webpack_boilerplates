"use-strict";

// Core
const { merge } = require("webpack-merge");

// Plugins
const plugins = require("../plugins/development");

module.exports = merge(
    plugins
);
