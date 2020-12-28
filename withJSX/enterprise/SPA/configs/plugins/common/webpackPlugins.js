"use-strict";

// Core
const { ProvidePlugin, DefinePlugin } = require("webpack");

// Helpers
const { areaEnv, environment } = require("../../helpers/env");
const { development, production } = require("../../helpers/options");

module.exports = () => [
    // Automatically load modules instead of having to import or require them everywhere.
    new ProvidePlugin({
        "React": "react",
    }),
    // The DefinePlugin allows you to create global constants which can be 
    // configured at compile time. This can be useful for allowing different 
    // behavior between development builds and production builds. If you perform
    // logging in your development build but not in the production build you 
    // might use a global constant to determine whether logging takes place.
    // That's where DefinePlugin shines, set it and forget it rules for 
    // development and production builds.
    new DefinePlugin({
        "env": {
            ...areaEnv,
            "BROWSER": true,
            "NODE_ENV": environment,
            "__DEV__": development,
            "__PROD__": production,
        },
    })
];
