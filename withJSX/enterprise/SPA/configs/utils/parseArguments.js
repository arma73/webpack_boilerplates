"use-strict";

/**
 * Extracting into a separate object those command parameters that were given to run.
 * @param {Array<string>} argv parameters to run
 * @example [ "--config", "configs/scripts" ] => { config: "configs/scripts" }
 * 
 * @returns {Object<string, string>} Those values that have a prefix '--' are changed to a key and the value after it is assigned to its value.
 */
const parseArguments = argv => {
    const data = {};

    argv.map((item, index) => {
        if (item.substring(0, 2) === "--") {
            const name = item.substring(2);
            const value = argv[index + 1] || true;

            data[name] = value;
        }
    });

    return data;
};

module.exports = parseArguments;
