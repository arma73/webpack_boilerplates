"use-strict";

// packages
const remarkHtml = require("../packages/remark-html");

module.exports = ({ remarkPlugins }) => ({
    "loader": "remark-loader",
    "options": {
        "remarkOptions": {
            "plugins": [...remarkPlugins, remarkHtml()]
        },
    },
});
