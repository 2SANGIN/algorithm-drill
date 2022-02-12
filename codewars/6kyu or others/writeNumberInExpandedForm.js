/*
 * Write Number in Expanded Form
 * https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
 * Complexity: O(n)
 */
function expandedForm(num) {
    const numStr = [...String(num)];
    const pad    = "0".repeat(numStr.length - 1);

    return numStr.reduce((expanded, n, index) => {
                     if (n !== "0") {
                         expanded.push(n + pad.slice(index));
                     }
                     return expanded;
                 }, [])
                 .join(" + ");
}

const {assert} = require("chai");

describe("Write Number in Expanded Form", function () {
    test(12, "10 + 2");
    test(42, "40 + 2");
    test(70304, "70000 + 300 + 4");
});

function test(parameter, expected, title) {
    const actual = expandedForm(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
