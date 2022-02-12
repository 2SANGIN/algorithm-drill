/*
 * Find the unique number
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
 * Complexity: O(n)
 */
function findUniq(arr) {
    const [a, b, c] = arr.slice(0, 3);
    if (a !== b && a !== c) {
        return a;
    }
    return arr.slice(1).find(n => n !== a);
}

const {assert} = require("chai");

describe("Find the unique number", function () {
    test([1, 0, 0], 1);
    test([0, 1, 0], 1);
    test([0, 0, 1], 1);
    test([1, 1, 1, 2, 1, 1], 2);
    test([1, 1, 2, 1, 1], 2);
    test([12, 12, 5, 12], 5);
    test([3, 10, 3, 3, 3], 10);
});

function test(parameter, expected, title) {
    const actual = findUniq(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
