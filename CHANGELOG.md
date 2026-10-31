3.1.0 / 2026-10-31
==================
 - [minor] Add custom rules `polware/sort-component-decorator-properties` and `polware/sort-standalone-imports` for Angular `@Component` decorators (enabled as `error` in the `angular` config, autofixable)

3.0.0 / 2026-10-28
==================
 - [major] Require ESLint 10, Node.js ^20.19.0 || ^22.13.0 || >=24 and TypeScript >=5.8 <6.1
 - [major] Default export is now a factory: `polware({ tsconfigRootDir })`. Subpath exports are `./angular`, `./typescript` and `./stylistic`, each a factory
 - [major] Enable `eslint:recommended` for TypeScript files (incl. the new ESLint 10 rules `no-unassigned-vars`, `no-useless-assignment`, `preserve-caught-error`)
 - [major] Replace `eslint-plugin-import` with `eslint-plugin-import-x` (`import/no-duplicates` -> `import-x/no-duplicates`)
 - [major] Remove `eslint-plugin-jasmine`; `fdescribe`/`fit` are now reported by `no-only-tests/no-only-tests`
 - [major] Remove `@nx/eslint-plugin`; use `angular-eslint` directly. New upstream recommended rules: `@angular-eslint/prefer-on-push-component-change-detection`, `@angular-eslint/template/prefer-control-flow`
 - [minor] Update typescript-eslint 8.72, angular-eslint 22, @stylistic 5, sonarjs 4, simple-import-sort 14, unused-imports 4.4
 - [fix] `tsconfigRootDir` pointed at the installed package instead of the consuming project
 - [fix] Spec overrides only matched spec files in the project root
 - [fix] Broken `./best-practices` and `./stylistic` subpath exports
 - [fix] Use `@typescript-eslint/no-shadow` and `@typescript-eslint/no-unused-expressions` instead of the core rules
 - [fix] Replace deprecated `max-statements-per-line` with `@stylistic/max-statements-per-line`
 - [fix] Only publish the config files

2.1.4 / 2026-02-24
==================
 - [minor] Parser configuration

2.1.1 / 2026-02-23
==================
 - [minor] Add local smoke test (`npm run lint:smoke`) for package-consumer verification

2.1.0 / 2026-02-23
==================
 - [minor] Make config easier to consume as a shareable flat config package
 - [minor] Export `best-practices` and `stylistic` subpath entrypoints
 - [minor] Improve README with current ESLint flat-config usage examples

2.0.1 / 2025-03-03
==================
 - [minor] Only lint files in /src

2.0.0 / 2025-03-03
==================
 - [major] ESLint 9.0 and flat config

1.0.11 / 2024-09-18
==================
 - [minor] Utilize base configurations

1.0.10 / 2024-09-16
==================
 - [minor] Cleaned configuration and moved it to one file

1.0.0 / 2024-08-07
==================
 - [major] Release