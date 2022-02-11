/*
 * Mexican Wave
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
 * Complexity: O(n)
 */
function wave(str) {
    return [...str].map((ch, index) => {
        if (ch !== " ") {
            return str.slice(0, index) + ch.toUpperCase() + str.slice(index + 1);
        }
    }).filter(str => str !== undefined);
}

const {assert} = require("chai");

describe("Mexican Wave", function () {
    let result;
    result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    test("hello", result, "Should return: '" + result + "'");

    result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
    test("codewars", result, "Should return: '" + result + "'");

    result = [];
    test("", result, "Should return: '" + result + "'");

    result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
    test("two words", result, "Should return: '" + result + "'");

    result = [" Gap ", " gAp ", " gaP "];
    test(" gap ", result, "Should return: '" + result + "'");
});

function test(parameter, expected, title) {
    const actual = wave(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
