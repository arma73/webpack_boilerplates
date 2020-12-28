"use-strict";

// Core
const { environment } = require("../helpers/env");

// Providing the mode configuration option tells webpack to use 
// its built-in optimizations accordingly.
module.exports = {
    "mode": environment, 
};
