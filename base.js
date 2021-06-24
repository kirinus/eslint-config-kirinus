module.exports = {
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:ordered-imports/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  plugins: [
    'eslint-comments',
    'import',
    'ordered-imports',
    'promise',
    'unicorn',
  ],
  rules: {
    /**
     * Global style rules
     */
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'object-curly-spacing': [2, 'always'],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      /**
       * Relax rules in configuration files
       */
      files: [
        '**/.eslintrc.js',
        '**/commitlint.config.js',
        '**/dangerfile.config.ts',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/karma.conf.js',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/protractor.conf.js',
        '**/protractor.conf.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/.stylelintrc.js',
        '**/typedoc.js',
        '**/vue.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
      ],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-unpublished-require': 'off',
        'prefer-const': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
