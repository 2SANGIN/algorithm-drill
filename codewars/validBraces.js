/*
 * Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
 * Complexity: O(n)
 */
function validBraces(braces) {
    Array.prototype.peek = function () {
        return this[this.length - 1];
    };

    const opener = ["(", "{", "["];
    const pair   = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    const queue  = [...braces];
    const stack  = [queue.shift()];

    while (queue.length > 0 || stack.length > 0) {
        const brace = queue.shift();

        if (opener.includes(brace)) {
            stack.push(brace);
        } else if (pair[brace] !== stack.peek()) {
            return false;
        } else {
            stack.pop();
        }
    }
    return true;
}

const chai   = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe("Valid Braces", function () {
    test("()", true);
    test("[(])", false);
    test("(){}[]", true);
    test("([{}])", true);
    test("(}", false);
    test("[(])", false);
    test("[({})](]", false);
});

function test(parameter, expected, title) {
    const actual = validBraces(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
