module.exports = {
  plugins: ['@typescript-eslint'],
  rules: { '@typescript-eslint/explicit-member-accessibility': 'off' },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['tsconfig.json'],
      },
      extends: ['./configurations/stylistic.js', './configurations/best-practices.js'],
    },
    {
      files: ['*.spec.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: [],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
};
