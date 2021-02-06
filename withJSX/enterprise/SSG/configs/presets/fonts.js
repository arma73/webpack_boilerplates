"use-strict";

module.exports = () => ([
    {
        "test": /\.(ttf|eot|woff|otf|woff2)(\?\S*)?$/,
        "type": "asset/resource",
        "generator": {
            "filename": "fonts/[hash][ext][query]"
        }
    }
]);
