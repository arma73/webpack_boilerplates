"use-strict";

// Core
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    "loader": MiniCssExtractPlugin.loader,
    "options": {
        "esModule": true,
        "publicPath": "../",
        "modules": {
            "namedExport": true,
        },
    },
});
