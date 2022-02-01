/*
 * Build a pile of Cubes
 * https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
 * Complexity: O(n)
 */
function findNb(m) {
    let i, remain = m;
    for (i = 1; remain > 0; i++) {
        remain -= i ** 3;
    }

    return remain === 0 ? i - 1 : -1;
}

const {assert} = require("chai");

describe("Build a pile of Cubes", function () {
    test(4183059834009, 2022);
    test(24723578342962, -1);
    test(135440716410000, 4824);
    test(40539911473216, 3568);
});

function test(parameter, expected, title) {
    const actual = findNb(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
