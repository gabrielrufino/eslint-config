module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': ['error'],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'warn',
    'sort-imports': ['error']
  },
  plugins: [
    'eslint-plugin-import'
  ],
}
