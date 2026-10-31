import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, it } from 'node:test';

import { ESLint } from 'eslint';
import { defineConfig } from 'eslint/config';

import polware from '@jeroenpol/eslint-config';
import angular from '@jeroenpol/eslint-config/angular';
import codeStyle from '@jeroenpol/eslint-config/stylistic';
import typescript from '@jeroenpol/eslint-config/typescript';

const cwd = join(import.meta.dirname, 'fixtures');

function createESLint(options = {}) {
  return new ESLint({
    cwd,
    overrideConfigFile: true,
    overrideConfig: defineConfig(polware({ tsconfigRootDir: cwd })),
    ...options,
  });
}

async function lint(file) {
  const [result] = await createESLint().lintFiles([join('src', file)]);
  const fatal = result.messages.filter((message) => message.fatal);
  assert.deepEqual(fatal, [], `fatal errors in ${file}`);
  return result;
}

async function ruleIds(file) {
  const result = await lint(file);
  return new Set(result.messages.map((message) => message.ruleId));
}

function assertRules(actual, expected) {
  for (const rule of expected) {
    assert.ok(actual.has(rule), `expected ${rule} to be reported, got: ${[...actual].join(', ')}`);
  }
}

describe('@jeroenpol/eslint-config', () => {
  it('exports factories from every entrypoint', () => {
    for (const factory of [polware, angular, codeStyle, typescript]) {
      assert.equal(typeof factory, 'function');
      assert.ok(Array.isArray(factory()));
    }
  });

  it('uses the consumer tsconfigRootDir', async () => {
    const config = await createESLint().calculateConfigForFile(join(cwd, 'src/clean.ts'));
    assert.equal(config.languageOptions.parserOptions.tsconfigRootDir, cwd);
  });

  it('reports nothing for clean code', async () => {
    const result = await lint('clean.ts');
    assert.deepEqual(result.messages, []);
  });

  it('does not use deprecated rules', async () => {
    const result = await lint('rules.ts');
    assert.deepEqual(result.usedDeprecatedRules.map(({ ruleId }) => ruleId), []);
  });

  it('reports typescript best practices', async () => {
    assertRules(await ruleIds('rules.ts'), [
      '@typescript-eslint/member-ordering',
      '@typescript-eslint/explicit-function-return-type',
      '@typescript-eslint/no-empty-function',
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/no-shadow',
      'no-unreachable',
      'sonarjs/cognitive-complexity',
    ]);
  });

  it('reports eslint recommended and typescript-aware core replacements', async () => {
    const rules = await ruleIds('shadow.ts');
    assertRules(rules, ['no-constant-condition', '@typescript-eslint/no-shadow', '@typescript-eslint/no-unused-expressions']);
    assert.ok(!rules.has('no-shadow'));
  });

  it('disables core rules that have a typescript-eslint replacement', async () => {
    const config = await createESLint().calculateConfigForFile(join(cwd, 'src/clean.ts'));
    for (const rule of ['no-shadow', 'no-unused-vars', 'no-unused-expressions', 'no-undef', 'no-redeclare']) {
      assert.equal(config.rules[rule]?.[0] ?? 0, 0, `${rule} should be off`);
    }
  });

  it('reports code style', async () => {
    assertRules(await ruleIds('export.ts'), ['@stylistic/quotes']);
  });

  it('reports and autofixes duplicate imports', async () => {
    assertRules(await ruleIds('duplicate-imports.ts'), ['import-x/no-duplicates']);

    const file = join(cwd, 'src/duplicate-imports.ts');
    const [result] = await createESLint({ fix: true }).lintText(await readFile(file, 'utf8'), { filePath: file });
    assert.match(result.output, /import \{ AAAA, NAME \} from '\.\/export';/);
  });

  it('reports focused tests in spec files', async () => {
    const result = await lint('focused.spec.ts');
    const focused = result.messages.filter((message) => message.ruleId === 'no-only-tests/no-only-tests');
    assert.equal(focused.length, 3);
  });

  it('reports angular template rules in html files', async () => {
    assertRules(await ruleIds('app.component.html'), [
      '@angular-eslint/template/button-has-type',
      '@angular-eslint/template/no-interpolation-in-attributes',
      '@angular-eslint/template/prefer-self-closing-tags',
    ]);
  });

  it('reports and autofixes custom component rules', async () => {
    assertRules(await ruleIds('unsorted.component.ts'), [
      'polware/sort-component-decorator-properties',
      'polware/sort-standalone-imports',
    ]);

    const file = join(cwd, 'src/unsorted.component.ts');
    const [result] = await createESLint({ fix: true }).lintText(await readFile(file, 'utf8'), { filePath: file });
    assert.match(result.output, /selector: 'app-unsorted',\n {2}templateUrl: '\.\/app\.component\.html',\n {2}imports: \[AppComponent, InlineComponent\],/);
  });

  it('reports angular template rules in inline templates', async () => {
    assertRules(await ruleIds('inline.component.ts'), ['@angular-eslint/template/button-has-type']);
  });
});
