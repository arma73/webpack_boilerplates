"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const entry = require("../parts/development/entry");
const target = require("../parts/development/target");
const externalsPresets = require("../parts/development/externalsPresets");
const externalsType = require("../parts/development/externalsType");

// Plugins
const plugins = require("../plugins/development");

module.exports = merge(
    entry,
    plugins,
    target,
    externalsPresets,
    externalsType,
);
