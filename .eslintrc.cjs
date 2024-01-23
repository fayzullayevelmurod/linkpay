/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    indent: ["error", 2],
    "space-in-brackets": ["error", "always"],
  },
  rules: {
    "require-jsdoc": ["off"],
    "max-len": ["error", { code: 120 }],
    "no-undef": ["off"],
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
