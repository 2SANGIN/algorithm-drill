/*
 * Valid Parentheses
 * https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 * Complexity: O(n)
 */
function validParentheses(parens) {
    const queue = [...parens];
    let state   = 0;
    while (state >= 0 && queue.length > 0) {
        state += queue.shift() === "(" ? 1 : -1;
    }
    return state === 0;
}

const {assert} = require("chai");

describe("Valid Parentheses", function () {
    test(`values: "("`, "(", false);
    test(`values: ")"`, ")", false);
    test(`values: ""`, "", true);
    test(`values: "()"`, "()", true);
    test(`values: "())"`, "())", false);
});

function test(title, parameter, expected) {
    const actual = validParentheses(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
