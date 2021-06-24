module.exports = {
  extends: [require.resolve('./base.js')],
  overrides: [
    {
      extends: ['eslint:recommended'],
      files: ['**/*.js'],
    },
  ],
};
