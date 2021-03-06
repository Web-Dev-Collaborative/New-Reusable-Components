module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'default-case': 0,
    'react/sort-comp': 0,
    'react/no-array-index-key': 0,
    'react/no-access-state-in-setstate': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'react/require-default-props': 0,
    'no-underscore-dangle': 0,
    'react/no-find-dom-node': 0,
    'no-mixed-operators': 0,
    'prefer-destructuring': 0,
    'react/no-unused-prop-types': 0,
    'max-len': 0,
    'max-classes-per-file': 0,
    'import/no-extraneous-dependencies': 0,
    'brace-style': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 1,
  },
};
