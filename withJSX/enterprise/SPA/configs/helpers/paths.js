"use-strict";

// Core
const { realpathSync } = require("fs");
const { join, resolve } = require("path");

// Utils
const getPublicUrl = require("../utils/getPublicUrl");
const getServedPath = require("../utils/getServedPath");
const resolveModule = require("../utils/resolveModule");

// Canonical path to application directory
const appDirectory = realpathSync(process.cwd());

/**
 * Getting an absolute path from a relative path
 * @param {string} relativePath Relative path to the module
 * 
 * @returns {string} Absolute path to the file
 */
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
    "appPath": resolveApp("."),
    "appSrc": resolveApp("src"),
    "dotenv": resolveApp(".env"),
    "appBuild": resolveApp("dist"),
    "appCache": resolveApp(".cache"),
    "appPublic": resolveApp("public"),
    "yarnLockFile": resolveApp("yarn.lock"),
    "dotenvProd": resolveApp(".env.production"),
    "appNodeModules": resolveApp("node_modules"),
    "appPackageJSON": resolveApp("package.json"),
    "publicUrl": getPublicUrl(resolveApp("package.json")),
    "appStatic": resolveApp(join("public", "static")),
    "appAssets": resolveApp(join("public", "assets")),
    "servedPath": getServedPath(resolveApp("package.json")),
    "appBuildStatic": resolveApp(join("dist", "static")),
    "appStyles": resolveApp(join("public", "static", "css")),
    "appEntryJS": resolveModule(resolveApp, join("src", "app", "index")),
    "appStyleIcons": resolveModule(resolveApp, join("src", "styles", "icons")),
    "appHtml": resolveApp(join("public", "static", "html", "index.html")),
};
