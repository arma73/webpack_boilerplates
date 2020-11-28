const path = require("path");

/**
 * Add spaces to a string.
 * @param {string} str initial view of the line. 
 * @param {number} length the size of the expected string.
 * 
 * @example 
 * const str = "abc";
 * generateSpaces(str, 6); // "abc   "
 * 
 * @returns {string} a new line with added spaces.
 */
const generateSpaces = (str, length) => str + " ".repeat(length - str.length);

/**
 * Represent an object in the console interface, absolute paths to entities.
 * @param {object} instance - path instance.
 * 
 * @returns {undefined}
 */
const presentPathsObject = instance => {
    console.log("\n|------- Relative path -------|\n");

    for (let [key, value] of Object.entries(instance)) {
        path.isAbsolute(String(value)) &&
            console.log(`|- ${generateSpaces(key, 30)}${value}`)
    }

    console.log("\n|------- Relative path -------|\n");
};

module.exports = {
    presentPathsObject
};