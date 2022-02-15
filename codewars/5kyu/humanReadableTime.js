/*
 * Human Readable Time
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 * Complexity: O(1)
 */
function humanReadable(seconds) {
    return [seconds / 3600, seconds / 60 % 60, seconds % 60]
        .map(Math.floor)
        .map(String)
        .map(timeStr => timeStr.padStart(2, "0"))
        .join(":");
}

const {assert} = require("chai");

describe("Human Readable Time", function () {
    test(0, "00:00:00", "humanReadable(0)");
    test(59, "00:00:59", "humanReadable(59)");
    test(60, "00:01:00", "humanReadable(60)");
    test(90, "00:01:30", "humanReadable(90)");
    test(3599, "00:59:59", "humanReadable(3599)");
    test(3600, "01:00:00", "humanReadable(3600)");
    test(45296, "12:34:56", "humanReadable(45296)");
    test(86399, "23:59:59", "humanReadable(86399)");
    test(86400, "24:00:00", "humanReadable(86400)");
    test(359999, "99:59:59", "humanReadable(359999)");
});

function test(parameter, expected, title) {
    const actual = humanReadable(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
