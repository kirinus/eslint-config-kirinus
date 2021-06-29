// TypeScript rules with jest support
module.exports = {
  extends: ['plugin:jest/recommended', require.resolve('./base.js')],
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'unicorn/no-array-for-each': 'off',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.*.expect'],
      },
    ],
  },
};
