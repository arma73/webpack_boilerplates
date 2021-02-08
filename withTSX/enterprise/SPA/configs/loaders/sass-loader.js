"use-strict";

module.exports = ({ ...props }) => ({
    "loader": "sass-loader",
    "options": {
        "implementation": require("node-sass"),
        "sassOptions": {
            "fiber": false,
            "outputStyle": "compressed",
            "webpackImporter": true,
        },
        ...props,
    }
});
