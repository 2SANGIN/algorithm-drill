/*
 * Find the missing letter
 * https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 * Complexity: O(n)
 */
function findMissingLetter(array) {
    const afterSkipping = array.map(letter => letter.charCodeAt(0))
                               .find((ascii, index, arr) => ascii !== (arr[0] + index));
    return String.fromCharCode(afterSkipping - 1);
}

const {assert} = require("chai");

describe("Find the missing letter ", function () {
    test(["a", "b", "c", "d", "f"], "e");
    test(["O", "Q", "R", "S"], "P");
});

function test(parameter, expected, title) {
    const actual = findMissingLetter(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
