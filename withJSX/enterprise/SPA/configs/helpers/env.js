"use-strict";

// Core
const { existsSync } = require("fs");
const dotenv = require("dotenv");

// Utils
const servedSepOS = require("../utils/servedSepOS");

// Paths
const { "dotenv": pathEnv, appPath } = require("./paths");

const environment = process.env.NODE_ENV || "development";
const envPublicUrl = process.env.PUBLIC_URL;
const isModern = process.env.BROWSERS_ENV === "modern";

let envFile = servedSepOS(appPath, `.env.${environment}`);

if (!existsSync(envFile)) {
    envFile = pathEnv;
}

// Parses the file of the area variable (.env. *) and returns in the "parsed" key an object that contains the values of the area variables that we set
const { parsed } = dotenv.config({
    "path": envFile,
});

module.exports = {
    environment,
    envPublicUrl,
    isModern,
    "areaEnv": parsed,
};
