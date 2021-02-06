"use-strict";

// Loaders
const babelLoader = require("../loaders/babel-loader");
const mdxjsLoader = require("../loaders/@mdxjs-loader");
const htmlLoader = require("../loaders/html-loader");
const remarkLoader = require("../loaders/remark-loader");

const remarkPlugins = [
    require("../packages/remark-gfm")(),
    require("../packages/remark-slug")(),
    require("../packages/remark-emoji")(),
    require("../packages/remark-custom-blockquotes")(),
];

module.exports = () => [
    {
        "test": /\.mdx$/,
        "use": [
            babelLoader(),
            mdxjsLoader({ remarkPlugins })
        ],
    },
    {
        "test": /\.md$/,
        "use": [
            htmlLoader(),
            remarkLoader({ remarkPlugins })
        ],
    }
];
