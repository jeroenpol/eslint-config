# polware eslint-config

## Usage

Use this esLint config as a basis for you Angular projects.

### Installation

1. Install the npm package

  ```sh
  npm i --save-dev @jeroenpol/eslint-config
  ```

2. Install peer dependencies using NPM 5+ and this command:

  ```sh
  npx install-peerdeps --dev @jeroenpol/eslint-config
  ```

3. Update your `.eslintrc` file to:

  ```json
  {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "overrides": [
      {
        "files": ["*.ts", "*.tsx"],
        "extends": ["@jeroenpol/eslint-config"]
      }
    ]
  }
  ```