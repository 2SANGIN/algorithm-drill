/*
 * Build Tower
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
 * Complexity: O(n)
 */
function towerBuilder(nFloors) {
    const range = (start, inclusiveEnd) => [...Array(inclusiveEnd - start + 1).keys()].map(num => num + start);
    return range(1, nFloors)
        .map(stars => " ".repeat(nFloors - stars) + "*".repeat(stars))
        .map(str => str + [...str].slice(0, nFloors - 1).reverse().join(""));
}

const {assert} = require("chai");

describe("Build Tower", function () {
    test(1, ["*"]);
    test(2, [" * ", "***"]);
    test(3, ["  *  ", " *** ", "*****"]);
});

function test(parameter, expected, title) {
    const actual = towerBuilder(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
