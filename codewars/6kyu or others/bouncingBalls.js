/*
 * Bouncing Balls
 * https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
 * Complexity: O(n)
 */
function bouncingBall(h, bounce, window) {
    let count = -1;

    if (h > 0 && bounce > 0 && bounce < 1) {
        let height = h;

        while (height > window) {
            height *= bounce;
            count += 2;
        }
    }
    return count;
}

const {assert} = require("chai");

describe("Bouncing Balls", function () {
    describe("test1", function () {
        test(3.0, 0.66, 1.5, 3);
    });

    describe("test2", function () {
        test(30.0, 0.66, 1.5, 15);
    });
});

function test(h, bounce, window, expected, title) {
    const actual = bouncingBall(h, bounce, window);
    it(title || `case [${h}, ${bounce}, ${window}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
