module.exports = {
    "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
    "parserOptions": {
        "warnOnUnsupportedTypeScriptVersion": false,
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            "modules": true,
            "jsx": true, // Allows for the parsing of JSX
        },
        "sourceType": "module",
    },
    "env": {
        "browser": true,
        "es2020": true,
        "node": true,
        "es6": true,
    },
    "plugins": ["@babel", "react", "jsx-a11y", "react-hooks", "boundaries", "prettier"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended", // eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // typescript-eslint/eslint-plugin
        "plugin:jsx-a11y/recommended", // eslint-plugin-jsx-a11y
        "plugin:boundaries/recommended", // eslint-plugin-boundaries
        "plugin:react-hooks/recommended", // eslint-plugin-react-hooks
        "plugin:prettier/recommended", // eslint-plugin-prettier
        "prettier/@typescript-eslint", // eslint-config-prettier
        "./.eslint.typescript.js",
    ],
    "globals": {
        "__PROD__": true,
    },
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            "babel-module": {},
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
            },
            "typescript": {
                "alwaysTryTypes": true,
            },
        },
        "boundaries/ignore": ["src/**/*.spec.(j|t)sx?", "src/**/*.test.(j|t)sx?"],
        "boundaries/elements": [
            {
                "type": "components",
                "pattern": "components/*",
            },
            {
                "type": "pages",
                "pattern": "pages/*",
            },
            {
                "type": "routes",
                "pattern": "routes/*",
            },
        ],
        "react": {
            "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    "rules": {
        // Prettier
        "prettier/prettier": 2,

        // Boundaries
        "boundaries/no-private": [0, { "allowUncles": false }],

        // React
        "react/jsx-fragments": ["error", "syntax"],
        "react/no-this-in-sfc": 0,
        "react/state-in-constructor": [2, "never"],
        "react/react-in-jsx-scope": 0,
        "react/no-unused-state": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-indent": [
            2,
            4,
            {
                "indentLogicalExpressions": true,
            },
        ],
        "react/jsx-no-undef": [
            0,
            {
                "allowGlobals": false,
            },
        ],
        "react/require-default-props": [0],
        "react/sort-prop-types": 0,
        "react/no-unused-prop-types": [
            2,
            {
                "skipShapeProps": false,
            },
        ],
        "react/prop-types": 0,
        "react/jsx-no-bind": [
            "warn",
            {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "ignoreDOMComponents": true,
            },
        ],

        // React hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

        // Props react
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-props-no-spreading": 0,
        "react/static-property-placement": 0,
        "react/jsx-indent-props": [2, 4],

        // jsx-a11y
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/interactive-supports-focus": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": [
            2,
            {
                "aspects": ["invalidHref", "preferButton"],
                "components": ["Link"],
                "specialLink": ["route"],
            },
        ],

        // Filename react
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".jsx", ".tsx"],
            },
        ],

        // Quotes
        "jsx-quotes": [2, "prefer-double"],
        "quotes": [2, "double"],
        "quote-props": ["error", "always"],

        // Comments
        "capitalized-comments": 0,
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": ["/"],
                "block": {
                    "exceptions": ["*", "-"],
                },
            },
        ],
        "multiline-comment-style": 0,

        // Spacing react
        "react/jsx-equals-spacing": [2, "never"],

        // Spacing
        "comma-spacing": [
            2,
            {
                "after": true,
                "before": false,
            },
        ],
        "space-before-function-paren": [
            2,
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always",
            },
        ],
        "keyword-spacing": [
            2,
            {
                "after": true,
                "before": true,
            },
        ],

        // Line react
        "react/jsx-one-expression-per-line": 0,

        // Line
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true,
            },
        ],
        "semi": [
            2,
            "always",
            {
                "omitLastInOneLineBlock": true,
            },
        ],
        "newline-after-var": 0,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 2,
                "maxEOF": 0,
                "maxBOF": 0,
            },
        ],
        "multiline-ternary": 0,
        "max-lines": [2, 100],
        "linebreak-style": 0,
        "function-call-argument-newline": [2, "consistent"],
        "object-curly-newline": [
            2,
            {
                "ImportDeclaration": {
                    "consistent": true,
                    "multiline": true,
                },
            },
        ],

        // Core
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
            },
        ],
        "camelcase": 0,

        // Tabs
        "no-tabs": 0,

        // code...
        "complexity": ["warn", { "max": 3 }],
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "no-return-assign": 0,
        "comma-dangle": 0,
        "eol-last": [2, "always"],
        "eqeqeq": [2, "smart"],
        "global-require": 0,
        "dot-notation": 0,
        "no-shadow": 0,
        "no-plusplus": 0,
        "no-underscore-dangle": 0,
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
            },
        ],
        "unicode-bom": [2, "never"],
        "padded-blocks": [2, "never"],
        "max-params": [2, 6],
        "max-len": [
            2,
            {
                "code": 150,
                "comments": 100,
                "tabWidth": 4,
                "ignoreUrls": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true,
                "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(",
            },
        ],
        "operator-linebreak": [
            1,
            "after",
            {
                "overrides": {
                    "?": "before",
                    ":": "before",
                },
            },
        ],
        "no-extra-semi": 1,
        "semi-spacing": [1, { "before": false, "after": true }],
    },
};
