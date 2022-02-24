/*
 * Permutations
 * https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
 * Complexity: O(n^2)
 */
function permutations(string) {
    if (string.length === 1) {
        return [string];
    }
    return [...string].sort()
                      .reduce((result, current, index, stringArray) => {
                          if (current === stringArray[index - 1]) {
                              return result;
                          }

                          const left       = stringArray.slice(0, index);
                          const right      = stringArray.slice(index + 1);
                          const restString = left.concat(right).join("");

                          return permutations(restString).map(restPermutationStr => current + restPermutationStr)
                                                         .concat(result);
                      }, []);
}

const {assert} = require("chai");

describe("Permutations", function () {
    test("a", ["a"]);
    test("ab", ["ab", "ba"]);
    test("aabb", ["aabb", "abab", "abba", "baab", "baba", "bbaa"]);
    test("a12a", ["12aa", "1a2a", "1aa2", "21aa", "2a1a", "2aa1", "a12a", "a1a2", "a21a", "a2a1", "aa12", "aa21"]);
});

function test(parameter, expected, title) {
    console.log("\n" + (title || `case [${parameter}]`));
    const actual = permutations(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual.sort(), expected.sort());
    });
}
