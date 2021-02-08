"use-strict";

// Core
const { existsSync } = require("fs");
const dotenv = require("dotenv");

// Utils
const servedSepOS = require("../utils/servedSepOS");

// Paths
const { "dotenv": pathEnv, rootPath } = require("./paths");

const environment = process.env.NODE_ENV || "development";
const envPublicUrl = process.env.PUBLIC_URL;
const isModern = process.env.BROWSERS_ENV === "modern";

let envFile = servedSepOS(rootPath, `.env.${environment}`);

if (!existsSync(envFile)) {
    envFile = pathEnv;
}

// Parses the file of the area variable (.env. *) and returns in the "parsed"
// key an object that contains the values of the area variables that we set
const { parsed } = dotenv.config({
    "path": envFile,
});

if (!parsed.REACT_APP_PORT) {
    parsed.REACT_APP_PORT = 3000;
}

if (!parsed.REACT_APP_HOST) {
    parsed.REACT_APP_HOST = "localhost";
}

module.exports = {
    environment,
    envPublicUrl,
    isModern,
    "areaEnv": parsed,
};
