module.exports = {
  extends: [require.resolve('./base.js')],
  overrides: [
    {
      extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      env: {
        browser: true,
      },
      files: ['**/*.{j,t}sx', '!**/*.test.{j,t}sx'],
      plugins: ['jsx-a11y', 'react', 'react-hooks'],
    },
  ],
};
