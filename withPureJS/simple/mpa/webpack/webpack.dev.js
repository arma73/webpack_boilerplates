// Development environment configuration file.

const webpack = require("webpack"); // Used to reference official plugins.
const { merge } = require("webpack-merge"); // Used to merge configuration files.

const webpackBase = require("./webpack.base"); // Introduce basic configuration.
const { SRC_PATH } = require("./tools/paths");

// Development profile
const devConfig = {
    output: {
        filename: 'js/[name].[fullhash:8].bundle.js', // Hash for development environment.
    },
    devtool: "cheap-module-source-map", // SourceMap is set in the development environment, not used in the production environment.
    // Start devServer, no files will be generated locally, all files will be compiled in memory (fast reading speed).
    devServer: {
        contentBase: "./dist/", // The contents of this directory can be accessed.
        overlay: true, // The error message is displayed directly in the browser window.
        inline: true, // The real-time reloaded script is inserted into your bundle, and the build message will appear in the browser console.
        hot: true, // Cooperate with webpack.NamedModulesPlugin, webpack.HotModuleReplacementPlugin to complete HMR.
        host: "0.0.0.0", // Set to 0.0.0.0 and cooperate with useLocalIp to access the LAN.
        useLocalIp: true, // Use the local IP to open devServer instead of localhost.
        open: true, // Tells dev-server to open the browser after server had been started.
        port: 8080, // Port number for receiving requests.
        // publicPath: config.PUBLIC_PATH, // The storage location of static resources, the assets folder of the root directory, ensure that publicPath always starts and ends with a slash (/). Can be set as a CDN address. This option is similar to url-prefix.
        // You can proxy the APIs of other servers through proxy.
        // proxy: {
        //     "/api": "http://127.0.0.1:3000"
        // }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                include: [SRC_PATH],
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    optimization: {
        moduleIds: "named", // To identify the module id.
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Hot swap.
    ]
};

module.exports = merge(webpackBase, devConfig);
