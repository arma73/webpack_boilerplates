"use-strict";

const { production } = require("../helpers/options");

const devtool = production ? false : "eval-cheap-module-source-map";

// This option controls if and how source maps are generated.
module.exports = {
    devtool,
};
