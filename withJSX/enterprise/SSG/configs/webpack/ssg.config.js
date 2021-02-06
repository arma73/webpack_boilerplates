"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const optimization = require("../parts/ssg/optimization");
const entry = require("../parts/ssg/entry");
const output = require("../parts/ssg/output");
const target = require("../parts/ssg/target");

// Plugins
const plugins = require("../plugins/ssg");

module.exports = merge(
    entry,
    output,
    optimization,
    plugins,
    target
);
