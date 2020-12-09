"use-strict";

// These options allows you to control how webpack notifies you of assets and entry points that exceed a specific file limit.
module.exports = {
    "performance": {
        "hints": "warning",
        "maxAssetSize": 500000,
        "maxEntrypointSize": 500000,
        "assetFilter": assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
};
