"use-strict";

module.exports = ({ development, production, loose, spec, modules }) => {
    const configs = [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ]
    ];

    development && 
        configs.unshift("@babel/preset-env");

    production &&
        configs.unshift([
            "@babel/preset-env",
            {
                spec,
                loose,
                modules,
                "debug": false,
            }
        ]);

    return [...configs];
};
