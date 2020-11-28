// Basic configuration file, including general configuration for different environments.

const HTMLWebpackPlugin = require("html-webpack-plugin"); // Used to generate html.
const path = require("path");

const { MARKUP_PATH, ROOT_DIR, BUILD_PATH, NODE_MODULES_PATH, SRC_PATH, ignorePages } = require("./tools/paths");
const getFileNameList = require("./utils/getFileNameList");

const htmlDirs = getFileNameList(MARKUP_PATH);

const HTMLPlugins = []; // Save HTMLWebpackPlugin instance.
const entry = {}; // Save entry list.

// Generate HTMLWebpackPlugin instance and entry list.
htmlDirs.forEach(page => {
    const htmlConfig = {
        fileName: `${page}.html`,
        template: path.resolve(MARKUP_PATH, `${page}.html`), // Template markup file.
    };

    const notFind = !ignorePages.find(item => item === page);

    if (notFind) {
        // HTML with entry js file, add entry js and public js on this page, and write entry js into Entries.
        htmlConfig.chunks = [page, "commons"]; // Allows you to add only some chunks (e.g only the unit-test chunk).
        entry[page] = `./src/js/${page}.js`;
    } else {
        // No entry js file, chunk is empty.
        htmlConfig.chunks = [];
    }

    const htmlPlugin = new HTMLWebpackPlugin(htmlConfig);
    HTMLPlugins.push(htmlPlugin);
});

// Base profile.
const baseConfig = {
    context: ROOT_DIR, // Entrance and plugin paths will be searched based on context.
    entry,
    output: {
        path: BUILD_PATH, // Packaging path, local physical path.
        assetModuleFilename: "[path]/[hash][ext][query]", // asset/resource the name of the modules file to the output directory.
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [SRC_PATH],
                exclude: [NODE_MODULES_PATH],
                use: ["babel-loader"]
            },
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline"
            }
        ]
    },
    plugins: [
        ...HTMLPlugins
    ]
};

module.exports = baseConfig;

