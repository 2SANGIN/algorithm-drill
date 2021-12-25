/*
 * Isograms
 * https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
 */

function isIsogram(str) {
    const map = {};
    for (let ch of str) {
        ch = ch.toLowerCase();
        if (map[ch]) {
            return false;
        }
        map[ch] = true;
    }
    return true;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(isIsogram("Dermatoglyphics"), true);
        assert.strictEqual(isIsogram("isogram"), true);
        assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent");
        assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case");
        assert.strictEqual(isIsogram("isIsogram"), false);
        assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram");
    });
});
