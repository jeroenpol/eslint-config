import angular from 'angular-eslint';

export default function angularConfig() {
  return [
    ...angular.configs.tsRecommended.map((config) => ({
      ...config,
      files: ['**/*.ts'],
    })),
    {
      name: 'polware/angular/inline-templates',
      files: ['**/*.ts'],
      processor: angular.processInlineTemplates,
    },
    ...[...angular.configs.templateRecommended, ...angular.configs.templateAccessibility].map((config) => ({
      ...config,
      files: ['**/*.html'],
    })),
    {
      name: 'polware/angular/template-rules',
      files: ['**/*.html'],
      rules: {
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/no-duplicate-attributes': ['error', { allowStylePrecedenceDuplicates: true }],
        '@angular-eslint/template/no-empty-control-flow': 'error',
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        '@angular-eslint/template/prefer-self-closing-tags': 'error',
        '@angular-eslint/template/prefer-template-literal': 'error',
        '@angular-eslint/template/prefer-static-string-properties': ['error'],
        '@angular-eslint/template/label-has-associated-control': 'off',
      },
    },
  ];
}
