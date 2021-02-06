const os = require("os");
const childProcess = require("child_process");

const getCommand = location => {
    let cmd = "git config --list";
    if (location) {
        cmd += (" --" + location);
    }
    return cmd;
};

async function parseStdout(stdout) {
    let config = {};
    const eol = os.platform() === "win32" ? "\n" : os.EOL;
    if (stdout instanceof Promise) {
        await stdout.then(value => String(value).split(eol)
            .filter(line => !!line)
            .forEach(line => {
                let [key, val] = line.split("=");
                if (val === undefined) {
                    return;
                }
                config[key] = val;
            }));
    }

    return {
        "email": config["user.email"],
        "name": config["user.name"],
    };
}

async function getUserData() {
    const cmd = getCommand("global");
    let stdout = new Promise((resolve, reject) =>
        childProcess.exec(cmd, (err, stdout, stderr) =>
            (err || stderr) ? reject(err || stderr) : resolve(stdout)
        )
    );
    const configs = await parseStdout(stdout);

    return configs;
}

exports.getUserData = getUserData;
