"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const mode = require("../parts/mode");
const node = require("../parts/node");
const modules = require("../parts/module");
const entry = require("../parts/entry");
const output = require("../parts/output");
const target = require("../parts/target");
const devtool = require("../parts/devtool");
const externals = require("../parts/externals");
const resolve = require("../parts/resolve");

// Plugins
const plugins = require("../plugins/common");

module.exports = merge(
    entry,
    output,
    modules,
    mode,
    node,
    target,
    devtool,
    externals,
    plugins,
    resolve
);
