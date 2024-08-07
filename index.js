module.exports = {
  extends: [
    './configuration/best-practices.js',
    './configuration/code-style.js',
    './configuration/imports.js',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
};
