"use-strict";

// Helpers
const { envPublicUrl } = require("../helpers/env");

/**
 * Public url of the app configurable using environment variable,
 * which can be installed before starting Node.js express server
 * If you want to host your website in a relative part other than the server root,
 * it is possible to specify the base URL either through the homepage key inside yours
 * package.json or via PUBLIC_URL environment variable, which must be set before building the project.
 * When you run react-scripts build script %PUBLIC_URL%, placeholders inside index.html file are replaced with environment variable string.
 * In case we want to serve our application under a different public URL,
 * for example https://my-site.com/app, we can build the project like this:
 * PUBLIC_URL = https: //my-site.com/app yarn react-scripts build
 * @param {string} appPackageJSON
 * 
 * @returns {string}
 */
const getPublicUrl = appPackageJSON =>
    envPublicUrl || require(appPackageJSON).homepage;

module.exports = getPublicUrl;
