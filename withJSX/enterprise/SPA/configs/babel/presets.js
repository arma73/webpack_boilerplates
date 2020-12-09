"use-strict";

module.exports = ({ production, loose, spec, useBuiltIns, modules }) => {
    const configs = [
        "@babel/preset-react"
    ];

    production &&
        configs.push([
            "@babel/env",
            {
                spec,
                loose,
                modules,
                useBuiltIns,
                "debug": false,
                "corejs": "3",
            }
        ]);

    return [...configs];
};
