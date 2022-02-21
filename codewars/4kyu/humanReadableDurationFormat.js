/*
 * Human readable duration format
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 * Complexity: O(1)
 */
function formatDuration(seconds) {
    const times = [31536000, 86400, 3600, 60, 1].map(unit => {
        const time = Math.floor(seconds / unit);
        seconds %= unit;
        return time;
    });

    const unitTexts = ["year", "day", "hour", "minute", "second"].map((origin, index) => origin + (times[index] > 1 ? "s" : ""));

    const components = times.map((time, index) => time > 0 ? index : -1)
                            .filter(index => index > -1)
                            .map(index => times[index] + " " + unitTexts[index]);

    const last         = components.pop();
    const secondToLast = components.pop();

    if (secondToLast) {
        components.push(secondToLast + " and " + last);
    } else {
        components.push(last);
    }

    return components.join(", ") || "now";
}

const {assert} = require("chai");

describe("Human readable duration format", function () {
    test(1, "1 second");
    test(62, "1 minute and 2 seconds");
    test(120, "2 minutes");
    test(3600, "1 hour");
    test(3662, "1 hour, 1 minute and 2 seconds");
});

function test(parameter, expected, title) {
    const actual = formatDuration(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
