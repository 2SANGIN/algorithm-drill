/*
 * Count the smiley faces!
 * https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
 * Complexity: O(n)
 */
function countSmileys(faces) {
    const smileJudge = {
        forEye  : face => [":", ";"].includes(face.eye),
        forNose : face => ["-", "~"].includes(face.nose),
        forMouth: face => [")", "D"].includes(face.mouth)
    };
    return faces.filter(face => face.length <= 3)
                .map(face => ({
                    eye  : face.charAt(0),
                    nose : face.length > 2 && face.charAt(1) || "-",
                    mouth: face.charAt(face.length - 1)
                }))
                .filter(smileJudge.forEye)
                .filter(smileJudge.forNose)
                .filter(smileJudge.forMouth).length;
}

const {assert} = require("chai");

describe("Count the smiley faces!", function () {
    test([], 0);
    test([":D", ":~)", ";~D", ":)"], 4);
    test([":)", ":(", ":D", ":O", ":;"], 2);
    test([";]", ":[", ";*", ":$", ";-D"], 1);
    test([":=D", ":=)", ";=D", ":=)"], 0);
    test([":oD", "(-P", ";~D", "(D", ";D", "o)", "8)", "5D", "(D", ";D", "4-dD", "5~)", ":)", "8~x", "5o)", ";d", ";-x",
          "4ox", "oxd", ";)d", "5~x)", "(x)", "'~D", "5D", "pP", "o)", ";8)", "pD"], 4);
});

function test(parameter, expected, title) {
    const actual = countSmileys(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
