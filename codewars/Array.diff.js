/*
 * Array.diff
 *
 */
function arrayDiff(a, b) {
    let uniqueB = b.reduce((arr, curr) => {
        if (!arr.includes(curr)) {
            arr.push(curr);
        }
        return arr;
    }, []);

    return a.filter(elem => !uniqueB.includes(elem));
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Array.diff", function () {
    it("Should pass Sample tests", function () {
        assert.deepEqual(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
        assert.deepEqual(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
        assert.deepEqual(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
        assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]")
        assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1]")
    });
});
