# to-iso-string

[![CircleCI](https://circleci.com/gh/segmentio/to-iso-string.svg?style=shield&circle-token=ab66b7ed28e7126456fae4c7dde07d6de9924381)](https://circleci.com/gh/segmentio/to-iso-string)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/to-iso-string/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/to-iso-string)

> [!NOTE]
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.
  
Cross-browser `toISOString` support.

## Installation

```sh
npm install @segment/to-iso-string
```

## Example

```js
var toISOString = require('@segment/to-iso-string');
var date = new Date("05 October 2011 14:48 UTC");

toISOString(date);
// "2011-10-05T14:48:00.000Z"
```
