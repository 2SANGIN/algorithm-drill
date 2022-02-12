/*
 * Your order, please
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 * Complexity: O(n)
 */
function order(words) {
    return words.split(" ")
                .reduce((sorted, word) => {
                    const index       = Number([...word].find(letter => letter >= "1" && letter <= "9"));
                    sorted[index - 1] = word;
                    return sorted;
                }, [])
                .join(" ");
}

const {assert} = require("chai");

describe("Your order, please", function () {
    test("is2 Thi1s T4est 3a", "Thi1s is2 3a T4est");
    test("4of Fo1r pe6ople g3ood th5e the2", "Fo1r the2 g3ood 4of th5e pe6ople");
    test("", "", "empty input should return empty string");
});

function test(parameter, expected, title) {
    const actual = order(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
