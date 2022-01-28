/*
 * Sort the odd
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 * Complexity: O(n log n)
 */
function sortArray(array) {
    const sortedOdd = array.filter(num => (num & 1) === 1)
                           .sort((a, b) => b - a);
    return array.map(num => (num & 1) === 1 ? sortedOdd.pop() : num);
}

const {assert} = require("chai");

describe("Sort the odd", function () {
    test([5, 3, 2, 8, 1, 4], [1, 3, 2, 8, 5, 4]);
    test([5, 3, 1, 8, 0], [1, 3, 5, 8, 0]);
    test([7, 1], [1, 7]);
    test([5, 8, 6, 3, 4], [3, 8, 6, 5, 4]);
    test([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
    test([1, 11, 2, 8, 3, 4, 5], [1, 3, 2, 8, 5, 4, 11]);
    test([], []);
});

function test(parameter, expected, title) {
    const actual = sortArray(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
