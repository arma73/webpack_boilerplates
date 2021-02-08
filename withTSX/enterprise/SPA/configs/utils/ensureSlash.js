"use-strict";

/**
 * Make sure the forward slash
 * @param {string} inputPath - Way
 * @param {boolean} needsSlash - Need a slash
 */
const ensureSlash = (inputPath, needsSlash) => {
    const hasSlash = inputPath.endsWith("/");
    if (hasSlash && !needsSlash) {
        return inputPath.substr(0, inputPath.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${inputPath}/`;
    } else {
        return inputPath;
    }
};

module.exports = ensureSlash;
