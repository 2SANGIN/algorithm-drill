/*
 * Calculating with Functions
 * https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 * Complexity: O(1)
 */
const operand = num => operator => operator ? operator(num) : num;
const zero    = operand(0);
const one     = operand(1);
const two     = operand(2);
const three   = operand(3);
const four    = operand(4);
const five    = operand(5);
const six     = operand(6);
const seven   = operand(7);
const eight   = operand(8);
const nine    = operand(9);

const plus      = op2 => op1 => op1 + op2;
const minus     = op2 => op1 => op1 - op2;
const times     = op2 => op1 => op1 * op2;
const dividedBy = op2 => op1 => Math.floor(op1 / op2);

const {assert} = require("chai");

describe("Calculating with Functions", function () {
    test(seven(times(five())), 35);
    test(four(plus(nine())), 13);
    test(eight(minus(three())), 5);
    test(six(dividedBy(two())), 3);
    test(eight(dividedBy(three())), 2);
});

function test(actual, expected, title) {
    it(title || `case [${actual}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
