/*
 * Does my number look big in this?
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
 * Complexity: O(log n)
 */
function narcissistic(value) {
    const digits = [];
    let number = value;
    while (number > 0) {
        digits.unshift(number % 10);
        number = Math.floor(number / 10);
    }

    const sumOwn = digits.map(val => Math.pow(val, digits.length))
                         .reduce((sum, val) => sum + val);
    return sumOwn === value;
}

const {assert} = require("chai");

describe("Does my number look big in this?", function () {
  test(7, true, "7 is narcissistic");
  test(371, true, "371 is narcissistic");
  test(1652, true, "1652 is not narcissistic");
});

function test(parameter, expected, title) {
    const actual = narcissistic(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
