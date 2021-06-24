module.exports = {
  extends: './index.js',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-array-callback-reference': 'off',
  },
};
