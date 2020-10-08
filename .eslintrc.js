const { delimiter } = require("path");

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      "react"
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:prettier/recommended",
      "plugin:react/recommended"
    ],
    rules: {
        "react/prop-types": "off",
    },
    env: {
        "browser": true,
        "node": true,
    }
  };
