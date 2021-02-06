"use-strict";

module.exports = ({ importLoaders = 1, ...props } = {}) => ({
    "loader": "css-loader",
    "options": {
        // Enables/Disables or setups number of loaders applied before CSS loader.
        importLoaders,
        // Enables/Disables url/image-set functions handling. Control url() resolving. 
        // Absolute URLs are not resolving.
        "url": true,
        ...props,
    },
});
