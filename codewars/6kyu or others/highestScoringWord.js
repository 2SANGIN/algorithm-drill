/*
 * Highest Scoring Word
 * https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
 * Complexity: O(n)
 */
function high(x) {
    const words    = x.split(" ");
    const scores   = words.map(word => [...word].map(letter => letter.charCodeAt(0))
                                                .reduce((sum, score) => sum + score - 96));
    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);
    return words[maxIndex];
}

const {assert} = require("chai");

describe("Highest Scoring Word", function () {
    test("man i need a taxi up to ubud", "taxi");
    test("what time are we climbing up the volcano", "volcano");
    test("take me to semynak", "semynak");
    test("aa b", "aa");
    test("b aa", "b");
    test("bb d", "bb");
    test("d bb", "d");
    test("aaa b", "aaa");
});

function test(parameter, expected, title) {
    const actual = high(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
