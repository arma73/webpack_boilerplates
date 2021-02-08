"use-strict";

const presets = require("./configs/babel/presets");
const plugins = require("./configs/babel/plugins");

module.exports = api => {
    // NOTE: when you change the babel config,
    //   you need to delete the cache for the new changes to work.
    const babel = api.caller(caller => Boolean(caller && caller.name === "babel-loader"));

    const production = api.env("production");
    const development = api.env("development");

    const legacy = true;
    const spec = true; // specification, makes the code slower but more reliable.
    const loose = false; // makes the code faster, but deviate from the standard.
    const modules = babel ? false : "commonjs";

    return {
        "presets": presets({ development, production, loose, spec, modules }),
        "plugins": plugins({ development, production, loose, legacy }),
    };
};
