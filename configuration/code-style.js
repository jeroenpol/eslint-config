module.exports = {
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@angular-eslint/use-lifecycle-interface': ['error'],
    '@angular-eslint/sort-lifecycle-methods': ['error'],
    '@angular-eslint/no-lifecycle-call': ['error'],
    '@angular-eslint/no-empty-lifecycle-method': ['error'],
    '@angular-eslint/no-async-lifecycle-method': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
      rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': 'warn', // overwritten NG default
        'arrow-spacing': 'warn',
        'block-spacing': 'warn',
        'brace-style': 'warn',
        'comma-dangle': [
          'warn',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'never',
            functions: 'never',
          },
        ], // overwritten NG default
        'comma-spacing': 'warn',
        'computed-property-spacing': 'warn',
        curly: ['warn', 'all'],
        'dot-location': ['warn', 'property'],
        'eol-last': 'warn',
        '@typescript-eslint/func-call-spacing': 'error',
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'multiline-arguments'],
        'generator-star-spacing': 'off',
        'implicit-arrow-linebreak': 'off',
        indent: 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            SwitchCase: 1,
            ObjectExpression: 1,
            offsetTernaryExpressions: true,
            ImportDeclaration: 'first',
            FunctionDeclaration: { parameters: 'first', body: 1 },
            CallExpression: { arguments: 'first' },
          },
        ],
        'key-spacing': ['warn'],

        'keyword-spacing': 'off', // overridden by @typescript-eslint
        '@typescript-eslint/keyword-spacing': ['warn', { after: true, before: true }],
        '@typescript-eslint/type-annotation-spacing': 'warn',
        'linebreak-style': 'off',
        'max-len': [
          'error',
          {
            code: 160,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
          },
        ], // overwritten NG default
        '@typescript-eslint/member-delimiter-style': ['warn'],
        'multiline-ternary': ['warn', 'always'],
        'new-parens': 'warn',
        'newline-per-chained-call': 'off',
        'no-confusing-arrow': ['error'],
        'no-constant-condition': 'off',
        'no-extra-parens': 'off', // prettier is actually very liberate with parens, so disabled the rule
        'no-extra-semi': 'warn',
        'no-floating-decimal': 'off',
        'no-mixed-operators': ['error'],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }], // overwritten NG default
        'no-tabs': 'error',
        'no-trailing-spaces': 'warn',
        'no-unexpected-multiline': 'error',
        'no-unused-vars': 'off', // off: conflict unused-imports/no-unused-vars
        '@typescript-eslint/no-unused-vars': 'off', // off: conflict unused-imports/no-unused-vars
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'no-duplicate-imports': 'error',

        'no-useless-constructor': 'off', // overridden by @typescript-eslint
        '@typescript-eslint/no-useless-constructor': ['error'],

        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': 'warn',
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'one-var-declaration-per-line': 'warn',
        'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'padded-blocks': ['warn', { blocks: 'never', switches: 'never' }],
        'prefer-arrow-callback': 'warn',

        'prefer-includes': 'off', // overruled by @typescript-eslint
        '@typescript-eslint/prefer-includes': 'warn',

        'prefer-optional-chain': 'off', // overruled by @typescript-eslint
        '@typescript-eslint/prefer-optional-chain': 'warn',

        quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }], // overwritten NG default
        'rest-spread-spacing': ['error', 'never'],
        semi: ['warn', 'always'],
        'semi-spacing': 'error',
        'semi-style': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        '@typescript-eslint/space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'unicode-bom': 'warn',
        'wrap-iife': 'warn',
        'wrap-regex': 'off',
        'yield-star-spacing': 'error',
        'no-unused-expressions': 'error',
        'prefer-const': 'error',
        'id-length': ['error', { min: 2, properties: 'never', exceptions: ['i', 'e', 'a', 'b', 'x', 'y', '_'] }], // TODO: remove some of these exceptions
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/member-ordering': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'off',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
            ignoredMethodNames: [
              'ngOnChanges',
              'ngOnInit',
              'ngDoCheck',
              'ngAfterContentInit',
              'ngAfterContentChecked',
              'ngAfterViewInit',
              'ngAfterViewChecked',
              'ngOnDestroy',
            ],
          },
        ],
      },
    },
  ],
};
