const fs = require("fs");

/**
 * Get the html file name, used to generate entry.
 * @param {string} path - source path html files.
 * 
 * @return {Array<string>} 
 */
const getFileNameList = path => {
    const fileList = [];
    const dirList = fs.readdirSync(path);
    dirList.forEach(item => {
        if (item.includes(".html")) {
            fileList.push(item.split(".")[0]);
        }
    });

    return fileList;
};

module.exports = getFileNameList;
