/*
 * Create Phone Number
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 */
function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    }
    const dict = array1.map(num => num * num)
        .reduce((dict, num) => (dict[num] = (dict[num] || 0) + 1, dict), {});
    return array2.every(num => --dict[num] >= 0);
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Are they the \"same\"?", () => {
    it("valid test", () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        assert.isTrue(comp(a1, a2));
    });

    it("invalid test", () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11 * 12, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        assert.isNotTrue(comp(a1, a2));

        assert.isFalse(comp(null, []));
        assert.isFalse(comp([], null));
    });
});
