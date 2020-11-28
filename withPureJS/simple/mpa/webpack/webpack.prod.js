// Production environment configuration file.

const { merge } = require("webpack-merge"); // Used to merge configuration files.
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Used to clear folders.
const TerserWebpackPlugin = require("terser-webpack-plugin"); // Used to minify JavaScript.
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extracts CSS into separate files. 

const webpackBase = require("./webpack.base"); // Introduce basic configuration.
const { SRC_PATH, BUILD_PATH } = require("./tools/paths");

// Production profile.
const prodConfig = {
    output: {
        filename: "js/[name].[chunkhash:8].bundle.js", // Chunkhash for production environment.
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                include: [SRC_PATH],
                use: [
                    MiniCssExtractPlugin.loader,
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
        moduleIds: "deterministic",
        minimize: true,
        minimizer: [new TerserWebpackPlugin()]
    },
    plugins: [
        new CleanWebpackPlugin({ "cleanOnceBeforeBuildPatterns": [BUILD_PATH] }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css", // The name of each output CSS file.
            chunkFilename: "[id].css"
        }),
    ]
};

module.exports = merge(webpackBase, prodConfig);
