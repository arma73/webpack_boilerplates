"use-strict";

// Plugins
const terserWebpackPlugin = require("../plugins/production/terserWebpackPlugin");

// All optimizations are available for manual configuration and overrides.
module.exports = {
    "optimization": {
        // Tell webpack to minimize the bundle using the TerserPlugin or the plugin(s) specified in optimization.minimizer.
        "minimize": true,
        // Allows you to override the default minimizer by providing a different one or more customized TerserPlugin instances.
        "minimizer": [
            ...terserWebpackPlugin()
        ],      
        // By default webpack v4+ provides new common chunks strategies out of the box for dynamically imported modules.
        "splitChunks": {
            "chunks": "all",
            "minSize": 30000,
            "cacheGroups": {
                "default": false,
                "commons": {
                    "test": /\.(j|t)sx?$/,
                    "chunks": "all",
                    "minChunks": 2,
                    "name": "commons",
                    "enforce": true,
                },
                "vendors": {
                    "test": /[\\/]node_modules[\\/]/,
                    "priority": -10,
                    "chunks": "all",
                    "name": "vendors",
                    "enforce": true,
                    "reuseExistingChunk": true,
                },
            },
        },
        // Setting optimization.runtimeChunk to true or 'multiple' adds an additional chunk containing only the runtime to each entrypoint. 
        "runtimeChunk": {
            "name": entrypoint => `runtime~${entrypoint.name}`,
        },
        // Use the optimization.emitOnErrors to emit assets whenever there are errors while compiling. This ensures that erroring assets are emitted. 
        // Critical errors are emitted into the generated code and will cause errors at runtime
        "emitOnErrors": true,
        // Tells webpack to figure out which exports are provided by modules to generate more efficient code for export * from .... 
        // By default optimization.providedExports is enabled.
        "providedExports": true,
        // Tells webpack to determine used exports for each module. This depends on optimization.providedExports. 
        // Information collected by optimization.usedExports is used by other optimizations or code generation i.e. 
        // exports are not generated for unused exports, export names are mangled to single char identifiers when all usages are compatible.
        // Dead code elimination in minimizers will benefit from this and can remove unused exports.
        "usedExports": true,
        // Tells webpack to recognise the sideEffects flag in package.json or rules to skip over modules which are flagged to contain 
        // no side effects when exports are not used.
        "sideEffects": true,
    },
};
