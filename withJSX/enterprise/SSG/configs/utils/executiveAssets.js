"use-strict";

// Core
const { join } = require("path");
const { readdir, readFile, writeFile } = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");

// Helpers
const { appBuild, appSrc } = require("../helpers/paths");
const flattenContentTree = require("./flattenContentTree");
const contentTree = require(join(appSrc, "settings", "_content.json"));

// content tree to path array
const paths = [
    ...flattenContentTree(contentTree)
];

exports.executiveAssets = ({ jsmodules, cssmodules }) => {
    for (let path of paths) {
        readdir(join(appBuild, path), (err, files) => {
            if (err) throw err;
            files.forEach(item => {
                if (item.endsWith(".html")) {
                    const pathHtml = join(appBuild, path, item);
                    readFile(pathHtml, "utf8", (err, data) => {
                        if (err) throw err;
                        const $ = cheerio.load(data);
                        jsmodules.forEach(item => {
                            $("body").append(`<script src="/${item}"></script>`);
                        });
                        cssmodules.forEach(item => {
                            $("head").append(`<link rel="stylesheet" href="/${item}" />`);
                        });
                        const html = $.html();
                        writeFile(pathHtml, html, "utf8", err => {
                            if (err) {
                                console.error(
                                    chalk.red(`${path + item} assets have not been added ❌`)
                                );
                                throw err;
                            }
                            console.log(
                                chalk.greenBright(`${path + item} added assets ✔`)
                            );
                        });
                    });
                }
            });
        });
    }
};
