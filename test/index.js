'use strict';

var assert = require('proclaim');
var toISOString = require('../lib');

describe('to-iso-string', function() {
  it('should work', function() {
    var date = new Date('05 October 2011 14:48 UTC');
    assert.strictEqual(toISOString(date), '2011-10-05T14:48:00.000Z');
  });

  it('should work at the nanosecond level', function() {
    var iso = '2013-07-18T23:58:38.555Z';
    var timestamp = 1374191918555;
    var date = new Date(timestamp);
    assert.strictEqual(toISOString(date), iso);
  });
});
