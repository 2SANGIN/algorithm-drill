/*
 * Decode the Morse code
 * https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
 * Complexity: O(n)
 */
const MORSE_CODE = [];

const decodeMorse = morseCode => {
    return morseCode.trim()
                    .split("   ")
                    .map(wordCode => wordCode.split(" ")
                                             .map(letterCode => MORSE_CODE[letterCode])
                                             .join(""))
                    .join(" ");
};

MORSE_CODE["-----"]  = "0";
MORSE_CODE[".----"]  = "1";
MORSE_CODE["..---"]  = "2";
MORSE_CODE["...--"]  = "3";
MORSE_CODE["....-"]  = "4";
MORSE_CODE["....."]  = "5";
MORSE_CODE["-...."]  = "6";
MORSE_CODE["--..."]  = "7";
MORSE_CODE["---.."]  = "8";
MORSE_CODE["----."]  = "9";
MORSE_CODE["--..--"] = ",";
MORSE_CODE["..--.."] = "?";
MORSE_CODE[".-.-.-"] = ".";
MORSE_CODE["-...-"]  = "=";
MORSE_CODE[".-"]     = "A";
MORSE_CODE["-..."]   = "B";
MORSE_CODE["-.-."]   = "C";
MORSE_CODE["-.."]    = "D";
MORSE_CODE["."]      = "E";
MORSE_CODE["..-."]   = "F";
MORSE_CODE["--."]    = "G";
MORSE_CODE["...."]   = "H";
MORSE_CODE[".."]     = "I";
MORSE_CODE[".---"]   = "J";
MORSE_CODE["-.-"]    = "K";
MORSE_CODE[".-.."]   = "L";
MORSE_CODE["--"]     = "M";
MORSE_CODE["-."]     = "N";
MORSE_CODE["---"]    = "O";
MORSE_CODE[".--."]   = "P";
MORSE_CODE["--.-"]   = "Q";
MORSE_CODE[".-."]    = "R";
MORSE_CODE["..."]    = "S";
MORSE_CODE["-"]      = "T";
MORSE_CODE["..-"]    = "U";
MORSE_CODE["...-"]   = "V";
MORSE_CODE[".--"]    = "W";
MORSE_CODE["-..-"]   = "X";
MORSE_CODE["-.--"]   = "Y";
MORSE_CODE["--.."]   = "Z";
const {assert}       = require("chai");

describe("Decode the Morse code", function () {
    test(".... . -.--   .--- ..- -.. .", "HEY JUDE");
    test("   .   .", "E E");
});

function test(parameter, expected, title) {
    const actual = decodeMorse(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
