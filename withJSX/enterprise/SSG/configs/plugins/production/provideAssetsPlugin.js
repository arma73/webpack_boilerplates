const { executiveAssets } = require("../../utils/executiveAssets");

class ProvideAssetsPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("ProvideAssetsPlugin", stats => {
            const assets = Object.keys(stats.compilation.assets);
            const jsmodules = assets.filter(item => item.startsWith("js/") && item.endsWith(".m.js"));
            const cssmodules = assets.filter(item => item.startsWith("styles/"));

            executiveAssets({ jsmodules, cssmodules });
        });
    }
}

module.exports = () => [
    new ProvideAssetsPlugin()
];
