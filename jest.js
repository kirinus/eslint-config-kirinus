// TypeScript rules with jest support
module.exports = {
  extends: ['plugin:jest/recommended', require.resolve('./base.js')],
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.*.expect'],
      },
    ],
  },
};
