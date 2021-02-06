"use-strict";

// Core
const chalk = require("chalk");
const detectPort = require("detect-port-alt");
const inquirer = require("inquirer");

const choosePort = async (defaultPort, host) => {
    try {
        const port = await detectPort(defaultPort, host);
        if (+port === +defaultPort) {
            return String(defaultPort);
        }

        const message = `Port ${defaultPort} is already in use.`;

        if (process.stdout.isTTY) {
            const questionName = "changePort";
            const question = {
                "type": "confirm",
                "name": questionName,
                "message": chalk.yellowBright(`${message} Do you want to run the app on another port?`),
                "default": true,
            };

            const result = await inquirer.prompt(question);
            return result[questionName] ? String(port) : null;
        }

        console.log(chalk.redBright(`➡ ${message}`));
    } catch (error) {
        console.log(chalk.redBright("➡ Error!"));
        console.error(error.message || error);
    }
};

module.exports = choosePort;
