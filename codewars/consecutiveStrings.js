/*
 * Consecutive strings
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 * Complexity: O(n^2)
 */
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k < 0 || k > strarr.length) {
        return "";
    }

    const concatArray = strarr.reduce((concat, str, index, array) => [...concat, array.slice(index, index + k).join("")], [])
                              .slice(0, strarr.length - k + 1);

    const lengthArray = concatArray.map(str => str.length);

    const maxLength = Math.max(...lengthArray);

    return concatArray[lengthArray.indexOf(maxLength)];
}

const {assert} = require("chai");

describe("Consecutive strings", function () {
    test(["zone", "abigail", "theta", "form", "libe", "zas"], 2, "abigailtheta");
    test(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1, "oocccffuucccjjjkkkjyyyeehh");
    test([], 3, "");
    test(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2,
         "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
    test(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2, "wlwsasphmxxowiaxujylentrklctozmymu");
    test(["zone", "abigail", "theta", "form", "libe", "zas"], -2, "");
    test(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3, "ixoyx3452zzzzzzzzzzzz");
    test(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15, "");
    test(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0, "");
});

function test(strarr, k, expected, title) {
    const actual = longestConsec(strarr, k);
    it(title || `case [${strarr}, ${k}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
