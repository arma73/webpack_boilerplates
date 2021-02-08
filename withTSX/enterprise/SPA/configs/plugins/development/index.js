"use-strict";

// Plugins
const hotModuleReplacementPlugin = require("./hotModuleReplacementPlugin");
const friendlyErrorsWebpackPlugin = require("./friendlyErrorsWebpackPlugin");

module.exports = {
    "plugins": [
        ...hotModuleReplacementPlugin(),
        ...friendlyErrorsWebpackPlugin()
    ].filter(Boolean),
};
