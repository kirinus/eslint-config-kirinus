# eslint-config-kirinus

Specific kirinus configuration for JavaScript and TypeScript projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-config-kirinus`:

```sh
npm install eslint-config-kirinus --save-dev
```

## Usage

Add `monorepo` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": "kirinus"
}
```
