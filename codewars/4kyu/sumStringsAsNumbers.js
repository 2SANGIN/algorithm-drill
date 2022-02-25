/*
 * Sum Strings as Numbers
 * https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
 * Complexity: O(n)
 */
function sumStrings(a, b) {
    const sum = [];

    let carry = false;
    const op1 = [...a].map(Number);
    const op2 = [...b].map(Number);
    while (op1.length || op2.length || carry) {
        carry += (op1.pop() || 0) + (op2.pop() || 0);
        sum.push(carry % 10);
        carry = carry >= 10;
    }

    while (sum[sum.length - 1] === 0) {
        sum.pop();
    }
    return sum.reverse().join("");
}

const {assert} = require("chai");

describe("Sum Strings as Numbers", function () {
    test("123", "456", "579");
    test("1234567", "1234567", "2469134");
    test("8797", "45", "8842");
    test("800", "9567", "10367");
    test("0001", "0009", "10");
});

function test(a, b, expected, title) {
    console.log("\n" + (title || `case [${a}, ${b}]`));
    const actual = sumStrings(a, b);
    it(title || `case [${a}, ${b}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
