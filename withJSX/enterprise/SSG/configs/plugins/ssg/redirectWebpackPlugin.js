"use-strict";

// Core
const RedirectWebpackPlugin = require("redirect-webpack-plugin");

module.exports = () => [
    new RedirectWebpackPlugin({
        "redirects": {
            "support": "/contribute/",
        },
    })
];
