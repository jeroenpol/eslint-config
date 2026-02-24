import tseslint from 'typescript-eslint';

import bestPracticesTS from './configurations/best-practices-ts.mjs';
import bestPracticesHTML from './configurations/best-practices-html.mjs';
import codeStyle from './configurations/code-style.mjs';

export { default as bestPracticesTS } from './configurations/best-practices-ts.mjs';
export { default as bestPracticesHTML } from './configurations/best-practices-html.mjs';
export { default as codeStyle } from './configurations/code-style.mjs';

export default [
  {
    files: ['**/*.mjs'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs'],
        },
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  },
  ...bestPracticesTS,
  ...bestPracticesHTML,
  ...codeStyle,
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
