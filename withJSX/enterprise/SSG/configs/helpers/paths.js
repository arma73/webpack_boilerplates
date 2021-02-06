"use-strict";

// Core
const { realpathSync } = require("fs");
const { join } = require("path");

// TODO: refactor later
// Canonical path to application directory
const rootPath = realpathSync(process.cwd());

// Utils
const getPublicUrl = require("../utils/getPublicUrl");
const getServedPath = require("../utils/getServedPath");
const getAbsolutePath = require("../utils/getAbsolutePath")(rootPath);

module.exports = {
    rootPath,
    "appSrc": getAbsolutePath("src"),
    "dotenv": getAbsolutePath(".env"),
    "appBuild": getAbsolutePath("dist"),
    "appConfig": getAbsolutePath("configs"),
    "appCache": getAbsolutePath(".cache"),
    "appPublic": getAbsolutePath("public"),
    "yarnLockFile": getAbsolutePath("yarn.lock"),
    "dotenvProd": getAbsolutePath(".env.production"),
    "appNodeModules": getAbsolutePath("node_modules"),
    "appPackageJSON": getAbsolutePath("package.json"),
    "publicUrl": getPublicUrl(getAbsolutePath("package.json")),
    "appStatic": getAbsolutePath(join("public", "static")),
    "appAssets": getAbsolutePath(join("public", "assets")),
    "servedPath": getServedPath(getAbsolutePath("package.json")),
    "appBuildStatic": getAbsolutePath(join("dist", "static")),
    "appStyles": getAbsolutePath(join("public", "static", "css")),
    "appStyleIcons": getAbsolutePath(join("src", "theme", "icons")),
    "appHtml": getAbsolutePath(join("public", "static", "html", "index.html")),
};
