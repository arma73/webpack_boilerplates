"use-strict";

// Helpers
const { production, development } = require("../helpers/options");

// Loaders
const cssLoader = require("../loaders/cssLoader");
const sassLoader = require("../loaders/sassLoader");
const styleLoader = require("../loaders/styleLoader");
const cacheLoader = require("../loaders/cacheLoader");
const threadLoader = require("../loaders/threadLoader");
const postcssLoader = require("../loaders/postcssLoader");
const miniCssExtract = require("../loaders/miniCssExtract");

module.exports = () => {
    const baseLoader = () => {
        if (production) {
            return [miniCssExtract()];
        }

        return [
            development && cacheLoader(),
            threadLoader("css"),
            styleLoader(),
        ].filter(Boolean);
    };
    
    // TODO: Separate .css and m.css
    return [
        {
            "test": /\.css$/,
            "use": [
                ...baseLoader(),
                cssLoader({
                    "importLoaders": 2,
                }),
                postcssLoader({
                    "sourceMap": development,
                })
            ],
        },
        {
            "test": /\.s(a|c)ss$/,
            "use": [
                ...baseLoader(),
                cssLoader({
                    "importLoaders": 2,
                }),
                sassLoader({
                    "sourceMap": development,
                }),
            ]
        }
    ];
};
