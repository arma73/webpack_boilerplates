"use-strict";

// Presets
const scripts = require("./scripts");
const styles = require("./styles");
const fonts = require("./fonts");
const images = require("./images");
const markdown = require("./markdown");

module.exports = [
    ...scripts(),
    ...styles(),
    ...fonts(),
    ...images(),
    ...markdown()
];
