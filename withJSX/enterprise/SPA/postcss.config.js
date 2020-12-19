module.exports = ({ env }) => ({
    // This module does not compile SCSS. It simply parses mixins as custom at-rules & variables as properties, 
    // so that PostCSS plugins can then transform SCSS source code alongside CSS.
    "syntax": require("postcss-scss"), //
    "plugins": {
        // PostCSS plugin to transform @import rules by inlining content.
        "postcss-import": {},
        // PostCSS plugin to unwrap nested rules like how Sass does it.
        "postcss-nested": {},
        // PostCSS plugin for Sass-like variables. ex. $blue: #056ef0;
        "postcss-simple-vars": {
            // Left unknown variables in CSS and do not throw an error. Default is false.
            "silent": true,
        },
        // When multiple units are mixed together in the same expression, the calc() statement is left as is, 
        // to fallback to the W3C calc() implementation.
        "postcss-calc": {},
        // PostCSS Custom Properties lets you use Custom Properties in CSS, following the CSS Custom Properties specification.
        // Note: This plugin only processes variables that are defined in the :root selector.
        "postcss-custom-properties": {
            "preserve": false,
            // "importFrom": "path/to/file.css", // => :root { --color: red }
        },
        // PostCSS Custom Media lets you use Custom Media Queries in CSS, following the CSS Media Queries specification.
        "postcss-custom-media": {},
        "postcss-preset-env": {
            "stage": 0,
        },
        ...(env === "production" && {
            "postcss-discard-comments": {},
            "cssnano": {
                "safe": true,
                "calc": false,
                "zindex": false,
                "sourcemap": true,
                "autoprefixer": false,
                "normalizeCharset": true,
                "convertValues": { "length": false },
                "colormin": true,
            },
            "autoprefixer": {
                "flexbox": "no-2009",
            },
        }),
    }
});
