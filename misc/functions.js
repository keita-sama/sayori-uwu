'use strict';

const handlePrefixes = (prefixes, text) => prefixes.find(pre => text.startsWith(pre)) || null;

const randomString = (keywords) => {
  const output = [];
  for (const arr of keywords) {
    output.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return output.join('');
};

const capitaliseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
};

const wait = require('util').promisify(setTimeout);

exports.handlePrefixes = handlePrefixes;
exports.sleep = wait;
exports.rstr = randomString;
exports.strFormat = capitaliseFirstLetter;