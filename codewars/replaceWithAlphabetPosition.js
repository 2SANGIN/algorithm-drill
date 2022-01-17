/*
 * Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * Complexity: O(n)
 */
function alphabetPosition(text) {
    const exclusiveAsciiStart = "a".charCodeAt(0) - 1;
    return [...text.toLowerCase()].filter(letter => letter >= "a" && letter <= "z")
                                  .map(letter => letter.charCodeAt(0))
                                  .map(ascii => ascii - exclusiveAsciiStart)
                                  .join(" ");
}

const {assert} = require("chai");

describe("Replace With Alphabet Position", function () {
    test("The sunset sets at twelve o' clock.",
         "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    test("The narwhal bacons at midnight.", "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
});

function test(parameter, expected, title) {
    const actual = alphabetPosition(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
