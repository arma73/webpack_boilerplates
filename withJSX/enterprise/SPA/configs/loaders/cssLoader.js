"use-strict";

// Helpers
const { development } = require("../helpers/options");
const { appSrc } = require("../helpers/paths");

module.exports = ({ importLoaders = 1, ...props }) => ({
    "loader": "css-loader",
    "options": {
        // Enables/Disables or setups number of loaders applied before CSS loader.
        importLoaders,
        // Enables/Disables url/image-set functions handling. Control url() resolving. 
        // Absolute URLs are not resolving.
        "url": true,
        // Use ES modules syntax
        "esModule": true,
        "modules": {
            // Setup mode option. You can omit the value when you want local mode.
            "mode": "local",
            // Allows to redefine basic loader context for local ident name.
            "localIdentContext": appSrc,
            // Allows to configure the generated local ident name
            "localIdentName": development 
                ? "[path][name]__[local]" 
                : "[hash:base64:5]",
            // Enables/disables ES modules named export for locals.
            "namedExport": true,
        },
        ...props,
    },
});
