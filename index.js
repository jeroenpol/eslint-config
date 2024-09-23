// TODO:
// difference between constructor inject and inject()
// check preset for stylistic
// check preset for typescript-eslint
// TODO: add rule that you have to assign reduce, map to a variable

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
      plugins: [
        '@stylistic',
        'rxjs-angular',
        'sonarjs',
        'simple-import-sort',
        'unused-imports',
      ],
      rules: {
        // GENERAL
        'no-unreachable': 'error',
        'no-debugger': 'error',
        'no-console': 'error',
        'no-empty': 'error',
        'unicode-bom': 'warn',

        // NAMING CONVENTIONS
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'enum',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
        ],

        // STYLISTIC
        // '@stylistic/quote-props': ['warn', 'as-needed'],
        '@stylistic/array-bracket-newline': ['warn', 'consistent'],
        // '@stylistic/array-bracket-spacing': ['warn', 'never'],
        '@stylistic/array-element-newline': ['warn', 'consistent'],
        // '@stylistic/arrow-parens': 'warn',
        // '@stylistic/arrow-spacing': 'warn',
        // '@stylistic/block-spacing': 'warn',
        // '@stylistic/brace-style': 'warn',
        '@stylistic/comma-dangle': [
          'warn',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'never',
            functions: 'never',
          },
        ],
        // '@stylistic/comma-spacing': 'warn',
        // '@stylistic/computed-property-spacing': 'warn',
        '@stylistic/dot-location': ['warn', 'property'],
        // '@stylistic/eol-last': 'warn',
        '@stylistic/function-call-spacing': ['error', 'never'],
        '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
        '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
        // '@stylistic/generator-star-spacing': ['error', 'after'],
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        // '@stylistic/indent': [
        //   'warn',
        //   2,
        //   {
        //     SwitchCase: 1,
        //     ObjectExpression: 1,
        //     offsetTernaryExpressions: true,
        //     ImportDeclaration: 'first',
        //     FunctionDeclaration: { parameters: 'first', body: 1 },
        //     CallExpression: { arguments: 'first' },
        //   },
        // ],
        // '@stylistic/key-spacing': ['warn'],
        // '@stylistic/keyword-spacing': ['warn', { after: true, before: true }],
        '@stylistic/max-len': [
          'error',
          {
            code: 120,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
          },
        ],
        // '@stylistic/member-delimiter-style': ['warn'],
        // '@stylistic/new-parens': 'warn',
        // '@stylistic/no-confusing-arrow': 'warn',
        '@stylistic/no-extra-semi': 'warn',
        // '@stylistic/no-mixed-operators': 'error',
        // '@stylistic/no-mixed-spaces-and-tabs': 'warn',
        // '@stylistic/no-multi-spaces': 'warn',
        // '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],
        // '@stylistic/no-tabs': 'error',
        // '@stylistic/no-trailing-spaces': 'warn',
        // '@stylistic/no-whitespace-before-property': 'warn',
        // '@stylistic/nonblock-statement-body-position': 'warn',
        '@stylistic/object-curly-newline': ['error', { consistent: true }],
        // '@stylistic/object-curly-spacing': ['warn', 'always'],
        '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        // '@stylistic/one-var-declaration-per-line': 'warn',
        // '@stylistic/operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        // '@stylistic/padded-blocks': ['warn', { blocks: 'never', switches: 'never' }],
        // CHECK DEFAULT VALUE IN CODE
        // '@stylistic/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        // '@stylistic/rest-spread-spacing': ['warn', 'never'],
        // '@stylistic/semi': ['warn', 'always'],
        // '@stylistic/semi-spacing': 'warn',
        '@stylistic/semi-style': 'warn',
        // '@stylistic/wrap-iife': 'warn',
        // '@stylistic/space-before-blocks': 'warn',
        // '@stylistic/space-before-function-paren': ['warn', {
        // anonymous: 'always', named: 'never', asyncArrow: 'always'
        // }],
        // '@stylistic/space-in-parens': ['warn', 'never'],
        // '@stylistic/space-infix-ops': 'warn',
        // '@stylistic/space-unary-ops': 'warn',
        '@stylistic/switch-colon-spacing': 'warn',
        // '@stylistic/template-curly-spacing': ['warn', 'never'],

        // CODE COMPLEXITY
        'max-depth': ['error', 8],
        'max-nested-callbacks': ['error', 8],
        'max-statements-per-line': ['error', { max: 1 }],
        'sonarjs/cognitive-complexity': ['error', 15],

        // CLASSES
        '@typescript-eslint/no-require-imports': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'no-duplicate-imports': 'error',
        'no-useless-constructor': 'off', // duplicate of @typescript-eslint/no-useless-constructor
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/member-ordering': 'warn',
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

        // FUNCTIONS
        'curly': ['error', 'all'],
        'max-lines-per-function': ['error', { max: 60, skipBlankLines: true, skipComments: true }],
        'max-statements': ['error', 20],
        'no-empty-function': 'error',
        'no-param-reassign': 'error',
        'no-unexpected-multiline': 'error',
        'prefer-arrow-callback': 'warn',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowHigherOrderFunctions: true }],
        'sonarjs/no-extra-arguments': 'error',

        // VARIABLES
        'unused-imports/no-unused-vars': [
          'error',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'no-shadow': 'error',
        'no-multi-assign': 'error',
        'prefer-const': 'error',
        'no-unused-expressions': 'error',
        'sonarjs/non-existent-operator': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
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
        '@typescript-eslint/prefer-optional-chain': 'warn',

        // ARRAYS
        'array-callback-return': 'error',
        '@typescript-eslint/array-type': 'error',
        'no-array-constructor': 'error',
        '@typescript-eslint/prefer-includes': 'warn',

        // SWITCH STATEMENTS
        'sonarjs/max-switch-cases': ['error', 10],
        'sonarjs/no-nested-switch': 'error',
        'default-case': 'error',
        'no-fallthrough': 'error',

        // COMPARISON
        'sonarjs/no-inverted-boolean-check': 'error',
        'eqeqeq': 'error',

        // ASYNCHRONOUS
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'rxjs-angular/prefer-takeuntil': [ // check if this one is needed (first, take(1))
          'error',
          {
            alias: ['takeUntilDestroyed'],
            checkComplete: true,
            checkDecorators: ['Component'],
            checkDestroy: true,
          },
        ],
      },
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
