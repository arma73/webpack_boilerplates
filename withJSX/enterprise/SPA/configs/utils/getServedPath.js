"use-strict";

// Core
const { sep } = require("path");

// Utils
const getPublicUrl = require("./getPublicUrl");
const ensureSlash = require("./ensureSlash");

// Helpers
const { envPublicUrl } = require("../helpers/env");

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can"t use a relative path in HTML because we don"t want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
/**
 * Served path
 * @param {*} appPackageJSON 
 */
const getServedPath = appPackageJSON => {
    const publicUrl = getPublicUrl(appPackageJSON);
    const servedUrl =
        envPublicUrl || (publicUrl ? new URL(publicUrl).pathname : sep);
    return ensureSlash(servedUrl, true);
};

module.exports = getServedPath;
