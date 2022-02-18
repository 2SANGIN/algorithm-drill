/*
 * RGB To Hex Conversion
 * https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
 * Complexity: O(1)
 */
function rgb(r, g, b) {
    const HEX = [..."0123456789ABCDEF"];
    const R   = Math.max(0, Math.min(r, 255));
    const G   = Math.max(0, Math.min(g, 255));
    const B   = Math.max(0, Math.min(b, 255));
    return HEX[R >> 4] + HEX[R & 0xF] + HEX[G >> 4] + HEX[G & 0xF] + HEX[B >> 4] + HEX[B & 0xF];
}

const {assert} = require("chai");

describe("RGB To Hex Conversion", function () {
    test(0, 0, 0, "000000");
    test(0, 0, -20, "000000");
    test(300, 255, 255, "FFFFFF");
    test(173, 255, 47, "ADFF2F");
});

function test(r, g, b, expected, title) {
    const actual = rgb(r, g, b);
    it(title || `case [${r}, ${g}, ${b}}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
