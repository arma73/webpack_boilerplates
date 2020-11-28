// The path of the HTML file, publicPath, etc.

const path = require("path");
const { presentPathsObject } = require("../utils/presentObject");

/*
    __dirname is the directory where the current file is located.
    process.cwd() is the directory where node is currently working, that is, the directory where package.json is located.
*/
const ROOT_DIR = process.cwd();

const paths = {
    ROOT_DIR, // Root directory.
    CONFIG_PATH: path.resolve(__dirname, ".."), // Configuration file directory.
    SRC_PATH: path.resolve(ROOT_DIR, "src"), // Source file directory.
    BUILD_PATH: path.resolve(ROOT_DIR, "dist"), // Build directory.
    PUBLIC_PATH: "assets", // Static file storage directory.
    MARKUP_PATH: path.resolve(ROOT_DIR, "src", "html"), // Markup directory.
    NODE_MODULES_PATH: path.resolve(ROOT_DIR, "node_modules"), // node_modules directory.
    ignorePages: ["test"] // Without entry files.
}; 

presentPathsObject(paths);

module.exports = paths;
