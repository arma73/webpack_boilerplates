"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const bail = require("../parts/production/bail");
const target = require("../parts/production/target");
const performance = require("../parts/production/performance");
const optimization = require("../parts/production/optimization");

// Plugins
const plugins = require("../plugins/production");

module.exports = merge(
    bail,
    target,
    plugins,
    performance,
    optimization
);
