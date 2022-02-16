/*
 * Directions Reduction
 * https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 * Complexity: O(n)
 */
function dirReduc(arr) {
    const dir = {
        NORTH: 1,
        SOUTH: -1,
        EAST : 2,
        WEST : -2
    };

    const newPath = [...arr];
    let i         = 1;
    while (i < newPath.length) {
        const prev = dir[newPath[i - 1]];
        const cur  = dir[newPath[i]];

        if (cur + prev === 0) {
            newPath.splice(--i, 2);
        } else {
            i++;
        }
    }

    return newPath;
}

const {assert} = require("chai");

describe("Directions Reduction", function () {
    test(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]);
    test(["NORTH", "WEST", "SOUTH", "EAST"], ["NORTH", "WEST", "SOUTH", "EAST"]);
    test(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
    test(["NORTH", "EAST", "EAST", "WEST", "WEST", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
});

function test(parameter, expected, title) {
    const actual = dirReduc(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
