/*
 * Next bigger number with the same digits
 * https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
 * Complexity: O(1)
 */
function nextBigger(n) {
    const swap     = (target, idx1, idx2) => [target[idx1], target[idx2]] = [target[idx2], target[idx1]];
    const original = String(n).split("");

    let temp = [...original];
    for (let i = original.length - 1; i >= 0; i--) {
        for (let gap = 1; gap < original.length - 1; gap++) {
            if (original[i] > original[i - gap]) {
                swap(temp, i, i - gap);
                return Number(temp.join(""));
            }

        }
    }
    return -1;
}

const {assert} = require("chai");

describe("Next bigger number with the same digits", function () {
    test(12, 21);
    test(513, 531);
    test(2017, 2071);
    test(414, 441);
    test(144, 414);
    test(9, -1);
    test(111, -1);
    test(531, -1);
    test(1234567890, 1234567908);
});

function test(parameter, expected, title) {
    console.log("\n" + (title || `case [${parameter}]`));
    const actual = nextBigger(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}

/*
 2017
 7210

 2017
 2071
 2107
 2170
 2701
 2710
 */
