"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const mode = require("../parts/common/mode");
const name = require("../parts/common/name");
const node = require("../parts/common/node");
const cache = require("../parts/common/cache");
const output = require("../parts/common/output");
const modules = require("../parts/common/module");
const context = require("../parts/common/context");
const devtool = require("../parts/common/devtool");
const resolve = require("../parts/common/resolve");
const entry = require("../parts/common/entry");
const externals = require("../parts/common/externals");

// Plugins
const plugins = require("../plugins/common");

module.exports = merge(
    mode,
    name,
    node,
    entry,
    cache,
    output,
    modules,
    context,
    devtool,
    plugins,
    resolve,
    externals,
);
