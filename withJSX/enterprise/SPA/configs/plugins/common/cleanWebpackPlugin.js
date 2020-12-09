"use-strict";

// Core
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Helpers
const { appBuild } = require("../../helpers/paths");

/**
 * All files inside webpack's output.path directory will be removed once, but the
 * directory itself will not be. If using webpack 4+'s default configuration,
 * everything under <PROJECT_DIR>/dist/ will be removed.
 * Use cleanOnceBeforeBuildPatterns to override this behavior.
 *
 * During rebuilds, all webpack assets that are not used anymore
 * will be removed automatically.
 */
module.exports = () => [
    new CleanWebpackPlugin({
        "cleanOnceBeforeBuildPatterns": [appBuild],
    })
];
