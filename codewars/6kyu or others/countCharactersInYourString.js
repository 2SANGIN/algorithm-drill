/*
 * Count characters in your string
 * https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 */
function count(string) {
    const result = {};
    for (const ch of string) {
        result[ch] = (result[ch] || 0) + 1;
    }
    return result;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("countCharactersInYourString", () => {
    it("should pass sample tests", () => {
        assert.deepEqual(count("aba"), {a: 2, b: 1});
        assert.deepEqual(count(""), {});
    });
});
