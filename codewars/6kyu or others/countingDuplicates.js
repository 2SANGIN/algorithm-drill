/*
 * Counting Duplicates
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
 * Complexity: O(n)
 */
function duplicateCount(text) {
    const countDict = text.toLowerCase()
                          .split("")
                          .reduce((dict, char) => {
                              dict[char] = (dict[char] || 0) + 1;
                              return dict;
                          }, {});
    return Object.values(countDict)
                 .filter(count => count > 1).length;
}

const {assert} = require("chai");

describe("Counting Duplicates", function () {
    // test code here
    test("", 0);
    test("abcde", 0);
    test("aabbcde", 2);
    test("aabBcde", 2, "should ignore case");
    test("Indivisibility", 1);
    test("Indivisibilities", 2, "characters may not be adjacent");
    test("aA11", 2);
    test("ABBA", 2);
});

function test(parameter, expected, title) {
    const actual = duplicateCount(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
