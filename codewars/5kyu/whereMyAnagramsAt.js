/*
 * Where my anagrams at?
 * https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
 * Complexity: O(n)
 */
function anagrams(word, words) {
    const target = [...word].sort().join("");
    return words.filter(word => target === [...word].sort().join(""));
}

const {assert} = require("chai");

describe("Where my anagrams at?", function () {
    test("abba", ["aabb", "abcd", "bbaa", "dada"], ["aabb", "bbaa"]);
    test("racer", ["crazer", "carer", "racar", "caers", "racer"], ["carer", "racer"]);
    test("laser", ["lazing", "lazy", "lacer"], []);
});

function test(word, words, expected, title) {
    const actual = anagrams(word, words);
    it(title || `case ${word}, [${words}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
