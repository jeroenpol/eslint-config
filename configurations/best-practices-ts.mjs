import importPlugin from 'eslint-plugin-import';
import eslintPluginJasmine from 'eslint-plugin-jasmine';
import eslintPluginNoOnlyTests from 'eslint-plugin-no-only-tests';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
  {
    plugins: {
      'import': importPlugin,
      'jasmine': eslintPluginJasmine,
      'no-only-tests': eslintPluginNoOnlyTests,
      'simple-import-sort': simpleImportSort,
      'sonarjs': sonarjs,
      '@typescript-eslint': tseslint.plugin,
      'unused-imports': unusedImports,
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // GENERAL
      'no-unreachable': 'error',
      'no-debugger': 'error',
      'no-console': 'error',
      'no-empty': 'error',
      'unicode-bom': 'warn',
      'object-shorthand': ['warn', 'consistent-as-needed'],

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

      // ORDERING
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [
              'signature',

              'private-instance-readonly-field',
              'public-instance-readonly-field',
              'protected-instance-readonly-field',
              'readonly-field',

              'public-static-field',
              'protected-static-field',
              'private-static-field',

              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',

              'constructor',

              'public-static-method',
              'protected-static-method',
              'private-static-method',

              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
            ],
          },
        },
      ],

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
      'no-duplicate-imports': 'off', // handled by plugin-import
      'import/no-duplicates': 'error',
      'no-useless-constructor': 'off', // duplicate of @typescript-eslint/no-useless-constructor
      '@typescript-eslint/no-useless-constructor': ['error'],
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
            'forRoot',
            'ngxsAfterBootstrap',
            'canActivate',
            'canDeactivate',
            'ngOnInit',
            'ngOnDestroy',
            'ngOnChanges',
            'ngAfterViewChecked',
            'ngAfterViewInit',
            'ngAfterContentChecked',
            'ngAfterContentInit',
            'ngDoCheck',
            'ngrxOnStoreInit',
          ],
        },
      ],

      // FUNCTIONS
      'curly': ['error', 'all'],
      'max-lines-per-function': ['error', { max: 60, skipBlankLines: true, skipComments: true }],
      'max-statements': ['error', 20],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      'no-param-reassign': 'error',
      'no-unexpected-multiline': 'error',
      'prefer-arrow-callback': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      'sonarjs/no-extra-arguments': 'error',

      // VARIABLES
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-shadow': 'error',
      'no-multi-assign': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'off', // handled by @typescript-eslint/no-unused-expressions
      'sonarjs/non-existent-operator': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
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
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.store.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'max-lines-per-function': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
    rules: {
      'max-statements': 'off',
      'max-lines-per-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'jasmine/no-focused-tests': 'error',
      'no-only-tests/no-only-tests': 'error',
    },
  },
];
