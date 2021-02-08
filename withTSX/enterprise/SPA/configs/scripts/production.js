"use-strict";

// Core
const webpack = require("webpack");
const chalk = require("chalk");

const setupCompiler = config => {
    const compiler = webpack(config);

    compiler.run((error, stats) => {
        if (error) {
            // error configuration
            console.error(error.stack || error);

            if (error.details) {
                console.error(error.details);
            }

            return null;
        }

        const info = stats.toString({
            "hash": true,
            "colors": true,
            "modules": false,
            "version": true,
            "env": true,
            "entrypoints": false,
        });

        console.log(chalk.greenBright("✔ Build completed"));
        console.info(chalk.blueBright(info));

        if (stats.hasErrors()) {
            // Compile-time error (broken import, syntax error, etc)
            console.log(chalk.redBright("➡ Compile-time Error!"));
        }

        if (stats.hasWarnings()) {
            // Compile-time warnings
            console.log(chalk.yellowBright("➡ Compile-time Warning!"));
        }
    });
};

module.exports = setupCompiler;
