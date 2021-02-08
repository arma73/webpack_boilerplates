"use-strict";

// Helpers
const { production, development } = require("../helpers/options");

// Loaders
const cssLoader = require("../loaders/css-loader");
const sassLoader = require("../loaders/sass-loader");
const styleLoader = require("../loaders/style-loader");
const cacheLoader = require("../loaders/cache-loader");
const threadLoader = require("../loaders/thread-loader");
const postcssLoader = require("../loaders/postcss-loader");
const miniCssExtract = require("../loaders/miniCssExtractPlugin-loader");

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
