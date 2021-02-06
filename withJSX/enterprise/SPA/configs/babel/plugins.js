"use-strict";

module.exports = ({ development, production }) => {
    const plugins = [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true,
            }
        ],
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true,
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-optional-chaining", // object?.prop
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-transform-react-constant-elements",

    ];

    development &&
        plugins.push("react-hot-loader/babel");

    production &&
        plugins.push([
            "babel-plugin-transform-react-remove-prop-types",
            {
                "mode": "remove",
                "removeImport": true,
                "ignoreFilenames": ["node_modules"]
            }
        ]);

    return plugins;
};
