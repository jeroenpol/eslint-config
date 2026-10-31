import sortComponentDecoratorProperties from './sort-component-decorator-properties.mjs';
import sortStandaloneImports from './sort-standalone-imports.mjs';

/** @type {import('eslint').ESLint.Plugin} */
export default {
  meta: {
    name: '@jeroenpol/eslint-config/custom-rules',
  },
  rules: {
    'sort-component-decorator-properties': sortComponentDecoratorProperties,
    'sort-standalone-imports': sortStandaloneImports,
  },
};
