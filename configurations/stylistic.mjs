import stylistic from '@stylistic/eslint-plugin';

const customized = stylistic.configs.customize({
  semi: true,
  jsx: false,
});

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...customized.rules,
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'never',
          functions: 'never',
        },
      ],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          ignoreComments: true,
        },
      ],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/semi-style': 'error',
      '@stylistic/switch-colon-spacing': 'error',
    },
  },
];
