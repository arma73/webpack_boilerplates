// Core
const directoryTree = require("directory-tree");
const fs = require("fs");
const path = require("path");

const { restructure } = require("./contentTreeEnhancers");

if (require.main === module) {
    main();
} else {
    module.exports = buildContentTree;
}

function main() {
    const source = process.argv[2];
    const output = process.argv[3];
    buildContentTree(source, output);
}

function buildContentTree(source, output) {
    if (!source) {
        return console.error("build-content-tree: you must provide a source path");
    }
    if (!output) {
        return console.error("build-content-tree: you must provide a output file name");
    }

    let content = directoryTree(source, { "extensions": /\.(md|mdx)/ });

    content = restructure(content, {
        "dir": source
    });

    fs.writeFileSync(path.resolve(output), JSON.stringify(content, 2), error => {
        if (error) {
            console.log("build-content-tree: ", error);
        } else {
            console.log("Successfully built content tree file at " + output);
        }
    });
}
