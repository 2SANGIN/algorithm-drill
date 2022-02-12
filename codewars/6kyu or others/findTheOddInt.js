/*
 * Find the odd int
 * https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 * Complexity: O(n)
 */
function findOdd(A) {
    return A.reduce((prev, cur) => prev ^ cur); // XOR
}

const {assert} = require("chai");

function test(a, expected) {
    const actual = findOdd(a);
    it(`case [${a}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}

describe("find the odd int", function () {
    test([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    test([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    test([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    test([10], 10);
    test([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    test([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});
