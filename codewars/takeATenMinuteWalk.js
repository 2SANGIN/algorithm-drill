/*
 * take a ten minutes walk
 * https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
 */

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    const path = {n: 0, s: 0, w: 0, e: 0};
    walk.forEach(dir => path[dir]++);
    return path.n === path.s && path.w === path.e;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.isTrue(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]), "should return true");
        assert.isNotTrue(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]), "should return false");
        assert.isNotTrue(isValidWalk(["w"]), "should return false");
        assert.isNotTrue(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]), "should return false");
    });
});
