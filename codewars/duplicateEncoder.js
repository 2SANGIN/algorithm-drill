/*
 * Duplicate Encoder
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * Complexity: O(2n)
 */
function duplicateEncode(word) {
    const chars = [...word.toLowerCase()];
    const dict  = chars.reduce((dict, char) => {
        dict[char] = (dict[char] || 0) + 1;
        return dict;
    }, {});

    return chars.map(char => dict[char] < 2 ? "(" : ")").join("");
}

const {assert} = require("chai");

describe("Duplicate Encoder", function () {
    test("din", "(((");
    test("recede", "()()()");
    test("Success", ")())())", "should ignore case");
    test("(( @", "))((");
});

function test(parameter, expected, title) {
    const actual = duplicateEncode(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
