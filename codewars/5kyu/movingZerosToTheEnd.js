/*
 * Moving Zeros To The End
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0
 * Complexity: O(n)
 */
const moveZeros = function (arr) {
    const nonZeros = [];
    const zeros    = [];
    for (const val of arr) {
        if (val === 0) {
            zeros.push(val);
        } else {
            nonZeros.push(val);
        }
    }
    return nonZeros.concat(zeros);
};

const {assert} = require("chai");

describe("Moving Zeros To The End", function () {
    test([1, 2, 0, 1, 0, 1, 0, 3, 0, 1], [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    test([false, 1, 0, 1, 2, 0, 1, 3, "a"], [false, 1, 1, 2, 1, 3, "a", 0, 0]);
});

function test(parameter, expected, title) {
    const actual = moveZeros(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
