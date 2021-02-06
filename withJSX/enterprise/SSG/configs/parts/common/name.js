"use-strict";

const { environment } = require("../../helpers/env");
const { ssg } = require("../../helpers/options");

module.exports = {
    "name": ssg 
        ? "ssg" 
        : environment,
};
