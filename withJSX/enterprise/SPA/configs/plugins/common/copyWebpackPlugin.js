"use-strict";

// Core
const CopyWepbackPlugin = require("copy-webpack-plugin");

// Helpers
const { appBuild, appPublic } = require("../../helpers/paths");

/**
 * Copies individual files or entire directories, which already exist, to the build directory.
 */
module.exports = () => [
    new CopyWepbackPlugin({
        "patterns": [
            {
                "noErrorOnMissing": true,
                "from": appPublic,
                "to": appBuild,
                "globOptions": {
                    "ignore": [
                        "**/public/static/**",
                        "**/public/assets/**",
                    ],
                },
            }
        ],
    })
];
