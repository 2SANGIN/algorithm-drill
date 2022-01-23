/*
 * Playing with digits
 * https://www.codewars.com/kata/5552101f47fc5178b1000050
 * Complexity: O(2n)
 */
function digPow(n, p) {
    const digits = [];

    let num = n;
    while (num > 0) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }

    const sum = digits.map((digit, index) => Math.pow(digit, p + index))
                      .reduce((sum, value) => sum + value);

    if (sum % n !== 0) {
        return -1;
    }

    return sum / n;
}

const {assert} = require("chai");

describe("Playing with digits", function () {
    test(89, 1, 1);
    test(92, 1, -1);
    test(695, 2, 2);
    test(46288, 3, 51);
});

function test(n, p, expected, title) {
    const actual = digPow(n, p);
    it(title || `case [${{n, p}}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
