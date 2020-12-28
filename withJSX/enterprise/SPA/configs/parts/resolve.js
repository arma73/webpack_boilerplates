"use-strict";

// Mocks
const alias = require("../mocks/alias");

// These options change how modules are resolved. webpack provides reasonable defaults, 
// but it is possible to change the resolving in detail
module.exports = {
    "resolve": {
        alias,
        "mainFiles": ["index"],
        "extensions": [".js", ".jsx", ".json"],
    },
};
