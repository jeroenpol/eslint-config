import tseslint from 'typescript-eslint';
import bestPractices from './configurations/best-practices.mjs';
import stylistic from './configurations/stylistic.mjs';

export default [
  {
    ignores: [
      '**/*.mjs',
    ]
  },
  ...bestPractices,
  ...stylistic,
  {
    files: ['*.spec.ts'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'max-lines-per-function': 'off',
      'no-unused-vars': 'error',
    },
  },

];
