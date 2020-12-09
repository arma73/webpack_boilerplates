"use-strict";

const presets = require("./configs/babel/presets");
const plugins = require("./configs/babel/plugins");

module.exports = api => {
    const web = api.caller(caller => Boolean(caller && caller.target === "web"));
    const babel = api.caller(caller => Boolean(caller && caller.name === "babel-loader"));

    const production = api.env("production");
    const development = api.env("development");

    const legacy = true;
    const spec = true; // specification, makes the code slower but more reliable.
    const loose = false; // makes the code faster, but deviate from the standard.
    const useBuiltIns = web ? "usage" : undefined;
    const modules = babel ? false : "commonjs";

    return {
        "presets": presets({ development, production, loose, spec, useBuiltIns, modules }),
        "plugins": plugins({ development, production, loose, legacy }),
    };
};
