/*
 * Split Strings
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 * Complexity: O(n)
 */
function solution(str) {
    const range  = n => [...Array(n).keys()];
    const newStr = str + "_";
    return range(newStr.length >> 1).map(n => n * 2)
                                    .map(n => newStr.slice(n, n + 2));
}

const {assert} = require("chai");

describe("Split Strings", function () {
    test("abcdef", ["ab", "cd", "ef"]);
    test("abcdefg", ["ab", "cd", "ef", "g_"]);
    test("", []);
});

function test(parameter, expected, title) {
    const actual = solution(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
