const ghpages = require("gh-pages");
const { getUserData } = require("./getGitConfig");

(async () => {
    const { name } = await getUserData();

    ghpages.publish("dist", {
        "dotfiles": true, // The usage below will push dotfiles (directories and files)
        "message": `Deploy: from @${name}`
    });
})();
