# @jeroenpol/eslint-config

Shareable ESLint flat config for TypeScript/JavaScript projects.

## ESLint standard this package follows

- Uses the ESLint flat config format (`eslint.config.*`).
- Designed as a shareable config package imported into your project config.
- Keeps `eslint` as `peerDependencies`.
- Ships required plugins as package `dependencies` for easier consumer setup.

## Install

```bash
npm i -D eslint typescript @jeroenpol/eslint-config
```

## Use in another project

Create `eslint.config.mjs` in your project root:

```js
import config from '@jeroenpol/eslint-config';

export default config;
```

## Override rules in your project

```js
import config from '@jeroenpol/eslint-config';

export default [
	...config,
	{
		files: ['**/*.ts'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},
];
```

## Use only part of the config

```js
import bestPractices from '@jeroenpol/eslint-config/best-practices';
import stylistic from '@jeroenpol/eslint-config/stylistic';

export default [
	...bestPractices,
	...stylistic,
];
```

## Validate locally (smoke test)

Run this in this repository to verify the config can be consumed through its package export:

```bash
npm run lint:smoke
```