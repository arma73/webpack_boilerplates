"use-strict";

// Core
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = () => [
    /**
     * The GenerateSW plugin will create a service worker file 
     * for you and add it to the webpack asset pipeline.
     */
    new GenerateSW({
        "swDest": "sw.js",
        "include": [/\.html$/, /\.js$/, /\.json$/],
        "exclude": [/\.jpg$/, /\.png$/, /\.map$/, /runtime.*\.js$/, /^manifest.*\.js(?:on)?$/],
    })
];
