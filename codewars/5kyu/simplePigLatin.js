/*
 * Simple Pig Latin
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 * Complexity: O(n)
 */
function pigIt(str) {
    const punctuationMarks = [".", ",", "!", "?", ":", ";", "-"];
    return str.split(" ")
              .map(word => {
                  if (punctuationMarks.includes(word)) {
                      return word;
                  }
                  return word.slice(1) + word.charAt(0) + "ay";
              })
              .join(" ");
}

const {assert} = require("chai");

describe("Simple Pig Latin", function () {
    test("Pig latin is cool", "igPay atinlay siay oolcay");
    test("This is my string", "hisTay siay ymay tringsay");
    test("Hello world !", "elloHay orldway !");
});

function test(parameter, expected, title) {
    const actual = pigIt(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
