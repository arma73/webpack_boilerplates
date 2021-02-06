"use-strict";

module.exports = ({ remarkPlugins }) => ({
    "loader": "@mdx-js/loader",
    "options": {
        remarkPlugins,
    },
});
