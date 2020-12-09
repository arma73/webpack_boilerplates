"use-strict";

// Core
const { merge } = require("webpack-merge");

// Helpers
const { environment } = require("../helpers/env");

// Webpacks
const common = require("../webpack/common.config");
const config = require(`../webpack/${environment}.config`);

const mergeConfig = merge(common, config);

require(`./${environment}`)(mergeConfig);
