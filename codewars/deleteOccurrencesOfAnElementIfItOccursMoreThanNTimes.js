/*
 * Delete occurrences of an element if it occurs more than n times
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 * Complexity: O(n)
 */
function deleteNth(arr, n) {
    const checker = {};
    return arr.filter(num => {
        checker[num] = (checker[num] || 0) + 1;
        return checker[num] <= n;
    });
}

const {assert} = require("chai");

describe("Delete occurrences of an element if it occurs more than n times", function () {
    test([20, 37, 20, 21], 1, [20, 37, 21]);
    test([1, 1, 3, 3, 7, 2, 2, 2, 2], 3, [1, 1, 3, 3, 7, 2, 2, 2]);
});

function test(parameter, n, expected, title) {
    const actual = deleteNth(parameter, n);
    it(title || `case [${parameter}], n=${n} -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
