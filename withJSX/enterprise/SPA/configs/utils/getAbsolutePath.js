"use-strict";

const { normalize, resolve } = require("path");

/**
 * Getting absolute path from relative path
 * @param {string} rootPath absolute path to the root directory
 */
const getAbsolutePath = rootPath => 
    /**
     *  @param {string} relativePath Relative path to the module
     * 
     *  @returns {string} Absolute path to the file
     */
    relativePath => normalize(resolve(rootPath, relativePath));

module.exports = getAbsolutePath;
