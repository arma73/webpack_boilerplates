"use-strict";

// Helpers
const { appStyleIcons } = require("../helpers/paths");

module.exports = () => [
    {
        "test": /\.(jpg|jpeg|png|ico)$/i,
        "type": "asset/resource",
        "generator": {
            "filename": "img/[name].[hash][ext][query]",
        }
    },
    {
        "test": /\.svg$/i,
        "type": "asset/resource",
        "exclude": [appStyleIcons],
        "generator": {
            "filename": "img/[name].[hash][ext][query]",
        },
    },
    {
        "test": /\.svg$/i,
        "use": ["@svgr/webpack"],
        "include": [appStyleIcons],
    }
];
