"use-strict";

// Core
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const chalk = require("chalk");

// Constants
const { "areaEnv": { "REACT_APP_PORT": PORT, "REACT_APP_HOST": HOST } } = require("../helpers/env");

// Utils
const choosePort = require("../utils/choosePort");

// Parts
const getOptionsDevServer = require("../parts/devServer");

const setupCompiler = async config => {
    try {
        const chosenPort = await choosePort(+PORT);

        if (!chosenPort) {
            console.log(
                chalk.yellowBright("➡ It's impossible to run the app 😢")
            );
            return null;
        }

        const compiler = await webpack(config);
        const options = getOptionsDevServer(compiler);
        const server = new WebpackDevServer(compiler, options);

        server.listen(chosenPort, options.host, () => {
            console.log(
                `${chalk.greenBright("➡ Server listening on")} ${chalk.blueBright(
                    `http://${HOST}:${chosenPort}`
                )}`
            );
        });
    } catch (error) {
        console.log(chalk.redBright("➡ Error!"));
        console.error(error.message || error);
    }
};

module.exports = setupCompiler;
