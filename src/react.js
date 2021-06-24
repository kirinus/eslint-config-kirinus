module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('./base.js'),
  ],
  files: ['**/*.{j,t}sx', '!**/*.test.{j,t}sx'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {},
};
