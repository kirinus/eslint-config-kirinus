module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('./base.js'),
  ],
  env: {
    browser: true,
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
};
