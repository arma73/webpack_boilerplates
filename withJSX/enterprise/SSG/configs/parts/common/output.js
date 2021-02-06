"use-strict";

// Core
const { relative, resolve } = require("path");

// Helpers
const { hashName, production, development } = require("../../helpers/options");
const { appBuild, appSrc } = require("../../helpers/paths");


// The top-level output key contains set of options instructing webpack 
// on how and where it should output your bundles, assets and anything
// else you bundle or load with webpack.
module.exports = {
    "output": {
        // The build folder.
        "path": appBuild,
        // Add /* filename */ comments to generated require()s in the output.
        "pathinfo": development,
        // There will be one main bundle, and one file per asynchronous chunk.
        // In development, it does not produce real files.
        "filename": production
            ? `js/${hashName}.m.js`
            : development && `js/${hashName}.m.js`,
        "chunkFilename": production
            ? `js/${hashName}.c.js`
            : development && `js/${hashName}.c.js`,

        // We inferred the "public path" (such as / or /my-project) from homepage.
        "publicPath": "/",

        // Point sourcemap entries to original disk location (format as URL on Windows)
        "devtoolModuleFilenameTemplate": production
            ? info =>
                relative(appSrc, info.absoluteResourcePath).replace(/\\/g, "/")
            : development &&
            (info => resolve(info.absoluteResourcePath).replace(/\\/g, "/")),
    },
};
