/*
 * Is a number prime?
 * https://www.codewars.com/kata/5262119038c0985a5b00029f
 * Complexity: O(sqrt(n))
 */
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i ** 2 <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const {assert} = require("chai");

describe("Is a number prime?", function () {
    describe("Basic tests", () => {
        test(0, false, "0 is not prime");
        test(1, false, "1 is not prime");
        test(2, true, "2 is prime");
        test(73, true, "73 is prime");
        test(75, false, "75 is not prime");
        test(-1, false, "-1 is not prime");
    });

    describe("Test prime", () => {
        test(3, true, "3 is prime");
        test(5, true, "5 is prime");
        test(7, true, "7 is prime");
        test(41, true, "41 is prime");
        test(5099, true, "5099 is prime");
    });

    describe("Test not prime", () => {
        test(4, false, "4 is not prime");
        test(6, false, "6 is not prime");
        test(8, false, "8 is not prime");
        test(9, false, "9 is not prime");
        test(45, false, "45 is not prime");
        test(-5, false, "-5 is not prime");
        test(-8, false, "-8 is not prime");
        test(-41, false, "-41 is not prime");
    });
});


function test(parameter, expected, title) {
    const actual = isPrime(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
