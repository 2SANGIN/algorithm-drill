/*
 * Sum of Digits / Digital Root
 * https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */
const assert = require("chai").assert;

function digital_root(n) {
    if (n < 10) {
        return n;
    }
    return digital_root(digital_root(Math.trunc(n / 10)) + digital_root(n % 10));

    // return (n - 1) % 9 + 1;
    // 9랑 연관이 있다는 것까지는 찾았었는데 아깝다.
}

describe("Tests", () => {
    it("test", () => {
        assert.equal(digital_root(16), 7);
        assert.equal(digital_root(456), 6);
    });
});
