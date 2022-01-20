/*
 * Unique In Order
 * https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 * Complexity: O(n)
 */
const uniqueInOrder = iterable => {
    return [...iterable].filter((value, index, array) => array[index - 1] !== value);
};

const {assert} = require("chai");

describe("Unique In Order", function () {
    test("AAAABBBCCDAABBB", ["A", "B", "C", "D", "A", "B"]);
    test("ABBCcAD", ["A", "B", "C", "c", "A", "D"]);
    test([1, 2, 2, 3, 3], [1, 2, 3]);
});

function test(parameter, expected, title) {
    const actual = uniqueInOrder(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
