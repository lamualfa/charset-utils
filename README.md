[![Actions Status](https://github.com/lamualfa/charset-utils/workflows/Node.js%20CI/badge.svg)](https://github.com/lamualfa/charset-utils/actions)
[![NPM Version](https://badgen.net/npm/v/charset-utils?icon=npm)](https://www.npmjs.com/package/charset-utils)

Charset utilities. Contains helper functions related to charset.

## Installation

```bash
npm install charset-utils
# Or
yarn add charset-utils
```

## Usage

```js
const { getIndexVal } = require('charset-utils');
// Or
const getIndexVal = require('charset-utils/libs/getIndexVal');

getIndexVal(100, 'abcdefghijklmnopqrstuvwxyz');
// Output: dw
```

## Available Function

#### `getIndexVal(index, charset) string`

- `index` - Desired index value
- `charset` - Target charset

Get `charset` value based on the `index` entered. Example:

```js
getIndexVal(1502, '0123456789');
// Output: 1502

getIndexVal(2, 'abcdef');
// Output: c

getIndexVal(25, 'abcdefghijklmnopqrstuvwxyz');
// Output: z

getIndexVal(26, 'abcdefghijklmnopqrstuvwxyz');
// Output: ba

// With .padStart
getIndexVal(6, '0123456789').padStart(4, '0');
// Output: 0006
```

#### `randomIntInclusive(min, max) number`

- `min` - Minimal random value will be generated (inclusive)
- `max` - Max random value will be generated (inclusive)

Generate random number with min(inclusive) and max(inclusive). Example:

```js
randomIntInclusive(0, 5);
// Output: 4

randomIntInclusive(0, 5);
// Output: 0

randomIntInclusive(0, 8);
// Output: 8
```

#### `shuffleCharset(charset) string`

- `charset` - Target charset

Randomize the entered charset. Example:

```js
shuffleCharset('abc');
// Output: bca

shuffleCharset('abcd');
// Output: dacb

shuffleCharset('0123456');
// Output: 214653
```
