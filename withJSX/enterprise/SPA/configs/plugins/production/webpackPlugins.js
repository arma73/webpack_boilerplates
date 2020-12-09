"use-strict";

// Core
const { 
    "ids": { HashedModuleIdsPlugin }, 
    "optimize": { AggressiveMergingPlugin }, 
    ContextReplacementPlugin 
} = require("webpack");

module.exports = () => [
    // This plugin will cause hashes to be based on the relative path of the module, generating a four character string as the module id.
    // Suggested for use in production.
    new HashedModuleIdsPlugin({
        "hashFunction": "md4",
        "hashDigest": "base64",
        "hashDigestLength": 5,
    }),
    // For production configuration with optimization
    new AggressiveMergingPlugin({
        "minSizeReduce": 1.6,
    }),
    // Context refers to a require with an expression such as require('./locale/' + name + '.json'). 
    // When encountering such an expression, webpack infers the directory ('./locale/') and a regular expression (/^.*\.json$/). 
    // Since the name is not known at compile time, webpack includes every file as module in the bundle.
    new ContextReplacementPlugin(),
];
