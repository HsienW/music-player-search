module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library",
        "jest-dom",
        "react-hooks"
    ],
    "parser": "babel-eslint",
    "overrides": [
        {
            "files": [
                "**/*.test.js",
                "**/*.test.jsx"
            ]
        }
    ],
    "rules": {
        "react/prop-types": "off",
        "no-console": 0,
        "linebreak-style": 0,
        "react/jsx-uses-vars": 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debug": "warn",
        "jest-dom/prefer-required": "error",
        "jest-dom/prefer-enabled-disabled": "error",
        "jest-dom/prefer-checked": "error",
        "jest-dom/prefer-to-have-attribute": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": [
            2,
            4
        ],
        "react/jsx-indent-props": [
            2,
            4
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/forbid-prop-types": [
            1,
            {
                "forbid": [
                    "any",
                ]
            }
        ],
        "react/jsx-boolean-value": [
            0
        ]
    }
};
