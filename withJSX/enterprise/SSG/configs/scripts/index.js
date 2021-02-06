"use-strict";

// Core
const { merge } = require("webpack-merge");

// Helpers
const { environment } = require("../helpers/env");
const { ssg } = require("../helpers/options");

// Webpacks
const common = require("../webpack/common.config");

const config = require(`../webpack/${ssg ? "ssg" : environment}.config`);
const mergeConfig = merge(common, config);
require(`./${environment}`)(mergeConfig);
