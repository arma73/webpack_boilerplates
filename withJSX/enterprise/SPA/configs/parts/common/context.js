"use-strict";

const { appSrc } = require("../../helpers/paths");

// The base directory, an absolute path, for resolving entry points and 
// loaders from configuration. By default the current directory is used, 
// but it's recommended to pass a value in your configuration. This makes 
// your configuration independent from CWD (current working directory).
module.exports = {
    "context": appSrc, 
};
