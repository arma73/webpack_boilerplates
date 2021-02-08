"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const target = require("../parts/development/target");

// Plugins
const plugins = require("../plugins/development");

module.exports = merge(
    target,
    plugins
);
