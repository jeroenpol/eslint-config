/**
 * @fileoverview Custom ESLint rule that enforces a prescribed property order
 * inside Angular `@Component` decorators.
 *
 * Required order:
 *   standalone, selector, templateUrl, styleUrl, styleUrls, imports, providers, exports
 *   followed by any remaining properties in their original
 *   relative order.
 *
 * @type {import('eslint').Rule.RuleModule}
 */

const REQUIRED_ORDER = [
  'standalone',
  'selector',
  'templateUrl',
  'styleUrl',
  'styleUrls',
  'imports',
  'providers',
  'exports',
];

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce a prescribed property order inside Angular @Component decorators.',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      wrongOrder:
        'Properties in @Component are not in the required order. Expected order: {{ expected }}.',
    },
  },

  create: function (context) {
    const sourceCode = context.sourceCode;

    /**
     * Returns the sort rank for a property key name.
     * Known properties get a fixed rank; unknown properties are ranked after
     * all known ones, preserving their relative order via their current index.
     *
     * @param {string} name
     * @param {number} currentIndex - fallback rank for unknown properties
     * @returns {number}
     */
    function getRank(name, currentIndex) {
      const rank = REQUIRED_ORDER.indexOf(name);
      if (rank !== -1) {
        return rank;
      }
      return REQUIRED_ORDER.length + currentIndex;
    }

    /**
     * Returns the key name for a property node, or `null` for computed /
     * spread properties.
     *
     * @param {import('estree').Property | import('estree').SpreadElement} prop
     * @returns {string | null}
     */
    function getPropName(prop) {
      if (prop.type !== 'Property' || prop.computed) {
        return null;
      }
      if (prop.key.type === 'Identifier') {
        return prop.key.name;
      }
      if (prop.key.type === 'Literal') {
        return String(prop.key.value);
      }
      return null;
    }

    /**
     * Inspects a `@Component(...)` `CallExpression` node and reports when its
     * properties are not in the required order.
     *
     * @param {import('estree').CallExpression} node
     */
    function checkComponent(node) {
      const [firstArg] = node.arguments;
      if (!firstArg || firstArg.type !== 'ObjectExpression') {
        return;
      }

      const properties = firstArg.properties;
      if (properties.length <= 1) {
        return;
      }

      const names = properties.map(getPropName);

      // Skip if any property cannot be reliably named (computed / spread).
      if (names.some((n) => n === null)) {
        return;
      }

      const ranks = names.map((name, index) => getRank(name, index));
      const alreadySorted = ranks.every((rank, i) => i === 0 || ranks[i - 1] <= rank);

      if (alreadySorted) {
        return;
      }

      const sortedProperties = [...properties].sort((a, b) => {
        const indexA = properties.indexOf(a);
        const indexB = properties.indexOf(b);
        return getRank(names[indexA], indexA) - getRank(names[indexB], indexB);
      });

      const sortedNames = sortedProperties.map((p) => getPropName(p));

      context.report({
        node: firstArg,
        messageId: 'wrongOrder',
        data: { expected: sortedNames.join(', ') },
        fix: function (fixer) {
          return properties.map((prop, i) => fixer.replaceText(prop, sourceCode.getText(sortedProperties[i])));
        },
      });
    }

    return {
      'ClassDeclaration > Decorator > CallExpression[callee.name="Component"]': checkComponent,
    };
  },
};
