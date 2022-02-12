/*
 * Bit Counting
 * https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
 */
var countBits = function (n) {
    let result = 0;

    while (n > 0) {
        result += n & 1;
        n = Math.floor(n / 2);
    }
    return result;
};

const {assert} = require("chai")

describe("bitCounting", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(countBits(0), 0);
        assert.strictEqual(countBits(4), 1);
        assert.strictEqual(countBits(7), 3);
        assert.strictEqual(countBits(9), 2);
        assert.strictEqual(countBits(10), 2);
        assert.strictEqual(countBits(1234), 5);
    })
})
