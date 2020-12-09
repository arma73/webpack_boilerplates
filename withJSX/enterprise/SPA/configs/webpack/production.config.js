"use-strict";
"use-strict";

// Core
const { merge } = require("webpack-merge");

// Parts
const bail = require("../parts/bail");
const performance = require("../parts/performance");
const optimization = require("../parts/optimization");

// Plugins
const plugins = require("../plugins/production");

module.exports = merge(
    bail,
    performance,
    plugins,
    optimization
);
