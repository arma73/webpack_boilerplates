"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const bail = require("../parts/production/bail");
const performance = require("../parts/production/performance");
const optimization = require("../parts/production/optimization");
const entry = require("../parts/production/entry");
const target = require("../parts/production/target");

// Plugins
const plugins = require("../plugins/production");

module.exports = merge(
    entry,
    bail,
    performance,
    plugins,
    optimization,
    target
);
