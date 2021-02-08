"use-strict";

// Helpers
const { appSrc, appAssets, appStatic } = require("../helpers/paths");

// Utils
const servedSepOS = require("../utils/servedSepOS");

const dependencies = {
    "react-dom": "@hot-loader/react-dom",
};

module.exports = {
    "_src": appSrc,
    "_assets": appAssets,
    "_static": appStatic,
    "_app": servedSepOS(appSrc, "app"),
    "_i18n": servedSepOS(appSrc, "i18n"),
    "_hooks": servedSepOS(appSrc, "hooks"),
    "_pages": servedSepOS(appSrc, "pages"),
    "_theme": servedSepOS(appSrc, "theme"),
    "_utils": servedSepOS(appSrc, "utils"), 
    "_routes": servedSepOS(appSrc, "routes"),
    "_services": servedSepOS(appSrc, "services"),
    "_settings": servedSepOS(appSrc, "settings"),
    "_components": servedSepOS(appSrc, "components"),
    "_containers": servedSepOS(appSrc, "containers"),
    ...dependencies,
};
