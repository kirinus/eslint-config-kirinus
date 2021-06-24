module.exports = {
  extends: [
    './javascript.js',
    './jest.js',
    './react.js',
    './typescript.js',
  ].map(require.resolve),
};
