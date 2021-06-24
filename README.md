# eslint-config-kirinus

Specific kirinus configuration for JavaScript and TypeScript projects

## Configuration

### 1. Install [ESLint](http://eslint.org)

```sh
npm i eslint --save-dev
```

### 2. Install `eslint-config-kirinus`

```sh
npm install eslint-config-kirinus --save-dev
```

### 3. Install required ESLint Plugins and configure

All configurations inherit from some base rules. Therefore these plugins are always required.

```sh
npm install eslint-plugin-eslint-comments \
            eslint-plugin-import \
            eslint-plugin-node \
            eslint-plugin-ordered-imports \
            eslint-plugin-promise \
            --save-dev
```

#### JavaScript

Lints `.js` files.

To add this configuration:

```js
module.exports = {
  extends: ['kirinus/javascript'],
};
```

#### Jest

Lints JavaScript/TypeScript test files with the following globs.

```js
[
  '**/__tests__/*.{j,t}s?(x)',
  '**/test/**/*.{j,t}s?(x)',
  '**/*.spec.{j,t}s?(x)',
  '**/*.test.{j,t}s?(x)',
];
```

It requires the following additional plugin:

```sh
npm install eslint-plugin-jest \
            --save-dev
```

To add this configuration:

```js
module.exports = {
  extends: ['kirinus/jest'],
};
```

#### React

Lints `.tsx` and `.jsx` React files that are no tests.

It requires the following additional plugins:

```sh
# npm
npm install eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            --save-dev
# yarn
yarn add eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         --dev
```

To add this configuration:

```js
module.exports = {
  extends: ['kirinus/react'],
};
```

#### TypeScript

Lints `.ts` and `.tsx` Files.

It requires the following additional plugin:

```sh
# npm
npm install @typescript-eslint/eslint-plugin \
            --save-dev
# yarn
yarn add @typescript-eslint/eslint-plugin \
         --dev
```

To add this configuration, you need to define your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your tsconfig.json.

For example:

```js
 module.exports = {
   extends: ['kirinus/typescript'],
+  parserOptions: {
+    project: './tsconfig.json',
+ }
 };
```

#### All

If you just want to use all the rules (ideally for a monorepo setup):

```sh
# npm
npm install eslint-plugin-eslint-comments \
            eslint-plugin-import \
            eslint-plugin-node \
            eslint-plugin-ordered-imports \
            eslint-plugin-promise \
            eslint-plugin-jest \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            @typescript-eslint/eslint-plugin \
            --save-dev
# yarn
yarn add eslint-plugin-eslint-comments \
         eslint-plugin-import \
         eslint-plugin-node \
         eslint-plugin-ordered-imports \
         eslint-plugin-promise \
         eslint-plugin-jest \
         eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         @typescript-eslint/eslint-plugin \
         --dev
```

and

```js
module.exports = {
  extends: ['kirinus'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

The `tsconfigRootDir` is useful when you want to load different `tsconfig.json` files.
It will always use the TypeScript configuration of the package to be linted.

### 4. Run ESLint

Run the following script:

```bash
# npm
npx eslint .
# yarn
yarn eslint .
```

ESLint will lint all relevant JS and TS files within the current folder, and output results.

Most IDEs via a ESLint plugin will also give these results.

## Troubleshooting

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include, when running
the `kirinus/typescript` config.

A common fix is to create a `tsconfig.eslint.json` file, which extends your `tsconfig.json` file and includes all files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Update your ESLint config file:

```js
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```

## Features

### Import ordering

This eslint configuration enforces order of imports in the JS and TS files, using [eslint-plugin-ordered-imports](https://www.npmjs.com/package/eslint-plugin-ordered-imports)
recommended rules with a small modification in the grouping to support monorepos.

```js
'ordered-imports/ordered-imports': [
  'error',
  {
    'group-ordering': [
      {
        name: 'internal monorepo libraries',
        match: '^(bot|cli|core|lib|rest|ui|utils|ws)-.*',
        order: 20,
      },
      { name: 'project root', match: '^[@|~]/', order: 20 },
      { name: 'parent directories', match: '^\\.\\.', order: 30 },
      { name: 'current directory', match: '^\\.', order: 40 },
      { name: 'third party', match: '.*', order: 10 },
    ],
  },
],
```

In the order `20`, it accepts imports like `@/my/import` and `~/my/import`, that are common ways
of referencing the root of the package in the JS world. In addition, imports that start with
`bot-`, `core-`, `lib-` are also grouped at a second level, because it is a convention used in
Kirinus to prefix packages in a monorepo.
