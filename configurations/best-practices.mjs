import sonarjs from 'eslint-plugin-sonarjs';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(tseslint.configs.recommendedTypeChecked,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'],
    plugins: { 'sonarjs': sonarjs, 'simple-import-sort': simpleImportSort, 'unused-imports': unusedImports, '@typescript-eslint': tseslint.plugin },
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

    // CODE COMPLEXITY
    'max-depth': ['error', 8],
    'max-nested-callbacks': ['error', 8],
    'max-statements-per-line': ['error', { max: 1 }],
    'sonarjs/cognitive-complexity': ['error', 15],

    // CLASSES
    '@typescript-eslint/no-require-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
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
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-param-reassign': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-arrow-callback': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowHigherOrderFunctions: true, allowExpressions: true }],
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
    '@typescript-eslint/no-floating-promises': 'error',
  },
});
