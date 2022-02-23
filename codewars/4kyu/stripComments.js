/*
 * Strip Comments
 * https://www.codewars.com/kata/51c8e37cee245da6b40000bd
 * Complexity: O(n)
 */
function solution(input, markers) {
    return input.split("\n")
                .map(line => {
                    const markerPosition = [...line].findIndex(ch => markers.includes(ch));
                    if (markerPosition > -1) {
                        return line.slice(0, markerPosition);
                    } else {
                        return line;
                    }
                })
                .map(line => line.trimEnd())
                .join("\n");
}

const {assert} = require("chai");

describe("Strip Comments", function () {
    test("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges");
    test("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");
});

function test(input, markers, expected, title) {
    const actual = solution(input, markers);
    it(title || `case [${input}], [${markers}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
