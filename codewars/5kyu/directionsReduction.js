/*
 * Directions Reduction
 * https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 * Complexity: O(n)
 */
function dirReduc(arr) {
    const opposite = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST : "WEST",
        WEST : "EAST"
    };

    return arr.reduce((dirs, dir) => {
        if (dirs[dirs.length - 1] === opposite[dir]) {
            dirs.pop();
        } else {
            dirs.push(dir);
        }
        return dirs;
    }, []);
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
