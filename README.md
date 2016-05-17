# to-iso-string

[![CircleCI](https://circleci.com/gh/segmentio/to-iso-string.svg?style=shield&circle-token=ab66b7ed28e7126456fae4c7dde07d6de9924381)](https://circleci.com/gh/segmentio/to-iso-string)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/to-iso-string/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/to-iso-string)

  
Cross-browser `toISOString` support.

## Installation

```sh
npm install to-iso-string
```

## Example

```js
var toISOString = require('to-iso-string');
var date = new Date("05 October 2011 14:48 UTC");

toISOString(date);
// "2011-10-05T14:48:00.000Z"
```
