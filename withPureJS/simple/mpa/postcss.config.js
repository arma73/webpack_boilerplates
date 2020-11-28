const postcss = ({ env }) => {
    const isEnvProduction = env === "production";

    return isEnvProduction
        ? {
            plugins: [
                "postcss-flexbugs-fixes",
                [
                    "postcss-preset-env",
                    {
                        autoprefixer: {
                            flexbox: "no-2009",
                            grid: "autoplace",
                            // Whether to decorate the default attribute value
                            cascade: true,
                            // Whether to remove unnecessary default prefixes
                            remove: true
                        },
                        stage: 3,
                        features: {
                            "custom-properties": false,
                        },
                    },
                ],
                "cssnano",
            ],
        }
        : { plugins: [] }
};

module.exports = postcss;