"use-strict";

const { appEntryJS } = require("../helpers/paths");

// As mentioned in Getting Started, there are multiple ways to define the entry property in your webpack configuration. 
// We will show you the ways you can configure the entry property, in addition to explaining why it may be useful to you.
module.exports = {
    "entry": {
        "app": [
            appEntryJS
        ],
    },
};
