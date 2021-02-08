"use-strict";

const { join } = require("path");
const { appCache, appConfig, rootPath } = require("../../helpers/paths");
const getAbsolutePath = require("../../utils/getAbsolutePath")(rootPath);

// Cache the generated webpack modules and chunks to improve build speed. 
// cache is set to type: 'memory' in development mode and disabled in production mode.
module.exports = {
    "cache": {
        // 'memory' | 'filesystem' 
        // Sets the cache type to either in memory or on the file system. 
        // The memory option is straightforward, it tells webpack to store 
        // cache in memory and doesn't allow additional configuration.
        // While setting cache.type to filesystem opens up more options for configuration.
        "type": "filesystem",
        // cache.buildDependencies is an object of arrays of additional code dependencies 
        // for the build. webpack will use a hash of each of these items and all dependencies 
        // to invalidate the filesystem cache.
        "buildDependencies": {
            // This makes all dependencies of this file - build dependencies
            "config": [getAbsolutePath(join(appConfig, "webpack", "common.config.js"))],
        },
        // Base directory for the cache. Defaults to node_modules/.cache/webpack.
        "cacheDirectory": `${appCache}/webpack`
    },
};
