/*
 * Vowel Count
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
 */

function getCount(str) {
    return str.replace(/[^aeiou]/g, "").length;
}

const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function () {
    it("should be defined", function () {
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});
