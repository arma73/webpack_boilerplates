"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const name = require("../parts/common/name");
const cache = require("../parts/common/cache");
const context = require("../parts/common/context");
const mode = require("../parts/common/mode");
const node = require("../parts/common/node");
const modules = require("../parts/common/module");
const output = require("../parts/common/output");
const devtool = require("../parts/common/devtool");
const externals = require("../parts/common/externals");
const resolve = require("../parts/common/resolve");

// Plugins
const plugins = require("../plugins/common");

module.exports = merge(
    name,
    cache,
    context,
    output,
    modules,
    mode,
    node,
    devtool,
    externals,
    plugins,
    resolve
);
