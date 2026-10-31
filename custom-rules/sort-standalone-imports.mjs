/**
 * @fileoverview Custom ESLint rule that enforces alphabetical sorting of the
 * `imports` array inside Angular `@Component` decorators.
 *
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce alphabetical sorting of the \'imports\' array in Angular @Component decorators.',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      unsorted: 'The \'imports\' array in @Component must be sorted alphabetically. Expected order: {{ expected }}.',
    },
  },

  create: function (context) {
    const sourceCode = context.sourceCode;

    /**
     * Returns a sortable name for an AST node, or `null` when the node has no
     * meaningful identifier (e.g. a spread element).
     *
     * @param {import('eslint').Rule.Node | null} node
     * @returns {string | null}
     */
    function getName(node) {
      if (!node) {
        return null;
      }
      if (node.type === 'Identifier') {
        return node.name;
      }
      if (node.type === 'MemberExpression') {
        return sourceCode.getText(node);
      }
      return null;
    }

    /**
     * Compares two strings case-insensitively.
     *
     * @param {string} a
     * @param {string} b
     * @returns {number}
     */
    function compare(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    /**
     * Inspects a `@Component(...)` `CallExpression` node and reports when its
     * `imports` array is not sorted alphabetically.
     *
     * @param {import('estree').CallExpression} node
     */
    function checkComponent(node) {
      const [firstArg] = node.arguments;
      if (!firstArg || firstArg.type !== 'ObjectExpression') {
        return;
      }

      const importsProperty = firstArg.properties.find(
        (p) => p.type === 'Property' && p.computed === false && p.key?.name === 'imports',
      );

      if (!importsProperty || importsProperty.value.type !== 'ArrayExpression') {
        return;
      }

      const elements = importsProperty.value.elements;
      if (elements.length <= 1) {
        return;
      }

      // Bail out when any element cannot be given a reliable name (e.g. spread).
      const names = elements.map(getName);
      if (names.some((n) => n === null)) {
        return;
      }

      const sortedNames = [...names].sort(compare);
      const alreadySorted = names.every((name, i) => name === sortedNames[i]);

      if (alreadySorted) {
        return;
      }

      context.report({
        node: importsProperty.value,
        messageId: 'unsorted',
        data: { expected: sortedNames.join(', ') },
        fix: function (fixer) {
          const sortedElements = [...elements].sort((a, b) => compare(getName(a) ?? '', getName(b) ?? ''));

          return elements.map((el, i) => fixer.replaceText(el, sourceCode.getText(sortedElements[i])));
        },
      });
    }

    return {
      'ClassDeclaration > Decorator > CallExpression[callee.name="Component"]': checkComponent,
    };
  },
};
