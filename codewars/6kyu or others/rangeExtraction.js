/*
 * Range Extraction
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
 */
function extractRange(list) {
    const arr = [...list];
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (arr[j] + 1 === arr[j + 1]) j++;

        if (j - i > 1) {
            arr.splice(i, j - i + 1, arr[i] + "-" + arr[j]);
        }
    }
    return arr.join();
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("range extraction", () => {
    it("test", () => {
        assert.equal(extractRange([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
    });
});
