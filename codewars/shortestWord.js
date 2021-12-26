/*
 * Shortest bWord
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 */
function findShort(s) {
    return s.split(" ")
            .sort((a, b) => b.length - a.length)
            .map(word => word.length)
            .pop();
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
        assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
    })
})
