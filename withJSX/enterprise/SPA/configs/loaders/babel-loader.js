"use-strict";

// Helpers
const { appCache } = require("../helpers/paths");

module.exports = () => ({
    "loader": "babel-loader",
    "options": {
        "cacheDirectory": appCache,
    },
});
