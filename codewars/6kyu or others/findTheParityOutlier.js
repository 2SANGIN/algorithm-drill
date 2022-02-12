/*
 * findTheParityOutlier
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
 * Complexity: O(n)
 */
function findOutlier(integers) {
    const evenOrOdd = Number(integers.slice(0, 3)
                                     .filter(num => (num & 1)).length <= 1);

    return integers.find(num => (num & 1) === evenOrOdd);
}

const {assert} = require("chai");

describe("Find The Parity Outlier", function () {
    test([0, 1, 2], 1);
    test([1, 2, 3], 2);
    test([2, 6, 8, 10, 3], 3);
    test([0, 0, 3, 0, 0], 3);
    test([1, 1, 0, 1, 1], 0);
});

function test(parameter, expected) {
    const actual = findOutlier([...parameter]);
    it(`case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
