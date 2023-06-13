module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': ['error', {
      'alphabetize': {
        'order': 'asc',
        'orderImportKind': 'asc'
      },
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    'no-use-before-define': 'warn',
  },
  plugins: [
    'eslint-plugin-import'
  ],
}
