const { normalize } = require("path");

/**
 * @example
 *  const path = "C:\\My\\Software\\Projects\\blog\\src\\content\\plugins\\comparison.md";
 *  const extension = "md";
 *  const dir = "C:\\My\\Software\\Projects\\blog\\src\\content";
 *  normalizeAbsoluteToRelative(path, extension, dir); => "/plugins/comparison/"
 * 
 * @param {string} path path to file or directory
 * @param {string} extension file permissions if it's a file
 * @param {string} dir root path to the folder where the files are located
 * 
 * @return {string} relative path to folder or file
 */
exports.normalizeAbsoluteToRelative = (path, extension, dir) => path
    // delete `.md` extensions
    .replace(extension, "")
    // delete source content directory
    .replace(normalize(dir).replace(/^(\.\/)/gm, ""), "")
    // Normalize url for Windows
    .replace(/\\/g, "/")
    // remove `index` for root urls
    .replace(/\/index$/, "")
    // replace empty strings with `/`
    .replace(/^$/, "/")
    // delete trailing dots for node
    .replace(/^(\.)/g, "")
    // add trailing slash if missing
    .replace(/\/?$/, "/");
