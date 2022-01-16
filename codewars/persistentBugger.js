/*
 * Persistent Bugger
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 * Complexity: O(n)
 */
function persistence(num) {
    function split(num) {
        let digits = [];
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        return digits;
    }

    function multiply(digits) {
        return digits.reduce((result, digit) => result * digit, 1);
    }

    let n      = num;
    let result = 0;
    while (n > 9) {
        n = multiply(split(n));
        result++;
    }
    return result;
}

const {assert} = require("chai");

describe("Persistent Bugger", function () {
    test(39, 3);
    test(4, 0);
    test(25, 2);
    test(999, 4);
});

function test(parameter, expected, title) {
    const actual = persistence(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}


/*
 30 = 0
 31 = 3
 32 = 6
 33 = 9
 34 = 12 = 2
 35 = 15 = 5
 36 = 18 = 8
 37 = 21 = 2
 38 = 24 = 8
 39 = 27 = 14 = 4

 221 = 4
 222 = 8
 223 = 12
 224 = 16
 225 = 20
 226 = 24
 227 = 28
 228 = 32
 229 = 36

 771 = 49
 772 = 98
 773 = 147 = 28 = 16 = 0
 774 = 196 = 54 = 20 = 0


 */
