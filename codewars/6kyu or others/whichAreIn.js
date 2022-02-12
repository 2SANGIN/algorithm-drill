/*
 * Which are in?
 * https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
 * Complexity: O(n^2)
 */
function inArray(array1, array2) {
    return array1.filter(str1 => array2.some(str2 => str2.indexOf(str1) > -1))
                 .sort();
}

const {assert} = require("chai");

describe("Which are in?", function () {
    test(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"], ["live", "strong"]);
    test(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"], ["arp", "live", "strong"]);
    test(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"], []);
});

function test(parameter, parameter2, expected, title) {
    const actual = inArray(parameter, parameter2);
    it(title || `case [${parameter}] [${parameter2}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
