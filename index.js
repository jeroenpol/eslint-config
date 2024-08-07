module.exports = {
  extends: [
    './configuration/best-practices.js',
    './configuration/code-style.js',
    './configuration/imports.js',
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
};
