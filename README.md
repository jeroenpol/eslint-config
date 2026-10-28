# @jeroenpol/eslint-config

Shareable ESLint flat config for Angular projects (TypeScript + HTML templates).

## Requirements

- Node.js `^20.19.0 || ^22.13.0 || >=24`
- ESLint `^10`
- TypeScript `>=5.8 <6.1` (the range supported by typescript-eslint)

## Install

```bash
npm i -D eslint typescript @jeroenpol/eslint-config
```

All plugins ship as dependencies of this package, so nothing else needs to be installed.

## Use in another project

Create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from 'eslint/config';
import polware from '@jeroenpol/eslint-config';

export default defineConfig(
  polware({ tsconfigRootDir: import.meta.dirname }),
);
```

`tsconfigRootDir` tells typescript-eslint where your `tsconfig.json` lives. It defaults to `process.cwd()`.

## Override rules in your project

```js
import { defineConfig } from 'eslint/config';
import polware from '@jeroenpol/eslint-config';

export default defineConfig(
  polware({ tsconfigRootDir: import.meta.dirname }),
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
);
```

## Use only part of the config

```js
import { defineConfig } from 'eslint/config';
import angular from '@jeroenpol/eslint-config/angular';
import stylistic from '@jeroenpol/eslint-config/stylistic';
import typescript from '@jeroenpol/eslint-config/typescript';

export default defineConfig(
  angular(),
  typescript({ tsconfigRootDir: import.meta.dirname }),
  stylistic(),
);
```

| Entrypoint | Contents |
|---|---|
| `@jeroenpol/eslint-config` | Everything below |
| `@jeroenpol/eslint-config/angular` | angular-eslint recommended + accessibility, inline templates and template rules |
| `@jeroenpol/eslint-config/typescript` | `eslint:recommended`, typescript-eslint, sonarjs, import sorting, duplicate and unused imports, focused tests |
| `@jeroenpol/eslint-config/stylistic` | `@stylistic` code style |

## Development

```bash
npm test     # lints the fixtures in test/fixtures and checks the expected rules fire
npm run lint # lints this package with its own config
```
