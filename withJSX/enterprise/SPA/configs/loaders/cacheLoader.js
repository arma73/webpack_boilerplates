"use-strict";

// Helpers
const { appCache } = require("../helpers/paths");

module.exports = () => ({
    "loader": "cache-loader",
    "options": {
        "cacheDirectory": appCache,
    },
});
