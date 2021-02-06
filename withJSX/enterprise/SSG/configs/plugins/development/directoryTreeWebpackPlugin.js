const DirectoryTreePlugin = require("directory-tree-webpack-plugin");
const { enhance, filter, sort } = require("../../utils/contentTreeEnhancers");

module.exports = () => [
    new DirectoryTreePlugin({
        "dir": "src/content",
        "path": "src/settings/_content.json",
        "extensions": /\.mdx?/,
        enhance,
        filter,
        sort
    })
];
