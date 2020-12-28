"use-strict";

// Whether to polyfill or mock certain Node.js globals and modules. 
// This allows code originally written for the Node.js environment 
// to run in other environments like the browser.
module.exports = {
    "node": false, // remove Node polyfills
};
