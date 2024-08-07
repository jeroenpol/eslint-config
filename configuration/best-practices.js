module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'rxjs-angular', 'sonarjs', 'redundant-undefined'],
      rules: {
        // Code complexity rules
        'max-depth': ['error', 3], // Goal value: 2
        'max-nested-callbacks': ['error', 5], // Goal value: 2-3
        'max-statements-per-line': ['error', { max: 1 }],
        complexity: ['error', { max: 8 }], // GOAL VALUE: 7
        'sonarjs/cognitive-complexity': ['error', 10], // GOAL VALUE: 6

        // Prevent code smells
        'max-lines-per-function': ['error', { max: 60, skipBlankLines: true, skipComments: true }], // Goal value: 40
        'max-statements': ['error', 20], // Goal value: 16-18?
        'sonarjs/max-switch-cases': ['error', 10],
        'sonarjs/no-nested-switch': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-redundant-jump': 'error',
        'no-empty-function': ['error', { allow: ['constructors'] }],
        'redundant-undefined/redundant-undefined': 'error',
        "@typescript-eslint/no-unnecessary-type-assertion": "error",

        // Prevent accidental bugs
        'no-param-reassign': 'error',
        'no-unreachable': 'error',
        'no-multi-assign': 'error',
        'array-callback-return': 'error',
        'sonarjs/no-extra-arguments': 'error',
        'sonarjs/non-existent-operator': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',
        'eqeqeq': 'error',
        'default-case': 'error',
        'no-fallthrough': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',

        // Type safety
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowHigherOrderFunctions: true }],

        // Disable JS features
        'no-debugger': 'error',
        'no-console': 'error',

        // Disabled ESLint rules
        '@typescript-eslint/interface-name-prefix': 'off',
        'max-classes-per-file': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'sort-keys': 'off',
        'no-empty': 'off',
        'no-shadow': 'off',

        // Conventions
        'no-array-constructor': 'error',
        '@typescript-eslint/array-type': 'error',
        'quote-props': ['warn', 'as-needed'],
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: false,
            types: {
              Boolean: {
                message: 'Use boolean instead',
                fixWith: 'boolean',
              },
              Number: {
                message: 'Use number instead',
                fixWith: 'number',
              },
              String: {
                message: 'Use string instead',
                fixWith: 'string',
              },
              Symbol: {
                message: 'Use symbol instead',
                fixWith: 'symbol',
              },
            },
          },
        ],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'enum',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            selector:
              "CallExpression[callee.object.name='console'][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]",
            message: 'Unexpected property on console object was called',
          },
        ],

        // Performance improvements + preventing memory leaks
        'rxjs-angular/prefer-takeuntil': [
          'error',
          {
            alias: ['untilDestroyed', 'takeUntilDestroyed'],
            checkDecorators: ['Component'],
            checkComplete: false,
            checkDestroy: false,
          },
        ],
      },
    },
  ],
};
