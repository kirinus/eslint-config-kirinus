// TypeScript rules with jest support
module.exports = {
  extends: [require.resolve('./base.js')],
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test/**/*.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)',
        '**/*.test.{j,t}s?(x)',
      ],
      plugins: ['jest'],
      rules: {
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'request.*.expect'],
          },
        ],
      },
    },
  ],
};
