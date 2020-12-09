"use-strict";

// Core
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

/**
 * This Webpack plugin enforces the entire path of all required modules match the exact case of the actual path on disk.
 * @example
 *   ERROR in ./src/containers/SearchProducts.js Module not found: Error: 
 *   [CaseSensitivePathsPlugin] 
 *     /Users/example/yourproject/src/components/searchProducts/searchproducts.js 
 *   does not match the corresponding path on disk 
 *     /Users/example/yourproject/src/components/searchproducts @ 
 *   ./src/containers/SearchProducts.js 9:22-84
 */
module.exports = () => [
    new CaseSensitivePathsPlugin(),
];
