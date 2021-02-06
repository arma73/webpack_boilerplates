"use-strict";

// Core
const { sep } = require("path");

/**
 * Depending on the operating system, it returns a valid path.
 * @param  {...string} paths - ways to unite.
 * 
 * @return {string}
 */
const servedSepOS = (...paths) => paths.join(sep);

module.exports = servedSepOS;
