/*
 * Multiples of 3 or 5
 * https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 * Complexity: O(1)
 */
function solution(number) {
    const sumOf = multipleNumber => {
        const count = Math.floor((number - 1) / multipleNumber);
        return (count + 1) * multipleNumber * count / 2;
    };

    return sumOf(3) + sumOf(5) - sumOf(15);
}

const {assert} = require("chai");

function test(n, expected) {
    let actual = solution(n);
    it(`Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}

describe("multiple of 3 or 5", function () {
    test(-1, 0);
    test(0, 0);
    test(1, 0);
    test(2, 0);
    test(3, 0);
    test(10, 23);
    test(20, 78);
    test(35, 258);
});


/*
 Solution
 When number is 20
 Answer -> 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78
 3 -> 3 6 9 12 15 18 21
 5 -> 5 10 15
 15 -> 15
 3 + 6 + 9 + 12 + 15 + 18 + 5 + 10 + 15 - 15 = 78

 When number is 35
 Answer -> 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 + 21 + 24 + 25 + 28 + 30 + 31 + 33 = 258
 3 -> 3 6 9 12 15 18 21 24 27 30 33
 5 -> 5 10 15 20 25 30
 15 -> 15 30
 3 + 6 + 9 + 12 + 15 + 18 + 21 + 24 + 27 + 30 + 33 + 5 + 10 + 15 + 20 + 25 + 30 - 15 - 30 = 258
 */
