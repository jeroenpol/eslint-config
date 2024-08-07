module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'simple-import-sort'],
      rules: {
        /* https://github.com/lydell/eslint-plugin-simple-import-sort#usage */
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'rxjs/Rx',
                message: "Please import directly from 'rxjs' instead",
              },
            ],
          },
        ],
      },
    },
  ],
};
