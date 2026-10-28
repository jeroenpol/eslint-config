import angular from './configurations/best-practices-html.mjs';
import typescript from './configurations/best-practices-ts.mjs';
import codeStyle from './configurations/code-style.mjs';

export { default as angular } from './configurations/best-practices-html.mjs';
export { default as typescript } from './configurations/best-practices-ts.mjs';
export { default as codeStyle } from './configurations/code-style.mjs';

/**
 * Polware ESLint config for Angular projects.
 *
 * @param {object} [options]
 * @param {string} [options.tsconfigRootDir] Root directory of the consuming project, defaults to process.cwd()
 */
export default function polware(options = {}) {
  return [
    ...angular(),
    ...typescript(options),
    ...codeStyle(),
  ];
}
