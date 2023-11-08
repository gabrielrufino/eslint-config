module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'import/order': ['error', {
      'alphabetize': {
        'order': 'asc',
        'orderImportKind': 'asc'
      },
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'warn',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
  },
  plugins: [
    'eslint-plugin-import'
  ],
}
