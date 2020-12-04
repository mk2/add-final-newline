![CI](https://github.com/mk2/add-final-newline/workflows/CI/badge.svg)

# add-final-newline

- A convenient library for adding newline to a file.
- It can be used via command-line, and library.
- It was inspired by https://github.com/sindresorhus/strip-final-newline.

## How to use

```sh
yarn add add-final-newline
yarn afl anyfile
```

or

```js
const afl = require("add-final-newline");
const withNewline = afl("...");
```
