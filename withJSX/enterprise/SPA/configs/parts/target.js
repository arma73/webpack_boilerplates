"use-strict";

const { development } = require("../helpers/options");

// webpack can compile for multiple environments or targets.
module.exports = {
    "target": development 
        ? "web" // web - Compile for usage in a browser-like environment (default)
        : "browserslist",
};
