/*
 * Who likes it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 * Complexity: O(1)
 */
function likes(names) {
    return {
        0: `no one likes this`,
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }[Math.min(4, names.length)];
}

const {assert} = require("chai");

describe("Who likes it?", function () {
    test([], "no one likes this");
    test(["Peter"], "Peter likes this");
    test(["Jacob", "Alex"], "Jacob and Alex like this");
    test(["Max", "John", "Mark"], "Max, John and Mark like this");
    test(["Alex", "Jacob", "Mark", "Max"], "Alex, Jacob and 2 others like this");
    test(["George", "Max", "Mark", "Jacob", "Alex"], "George, Max and 3 others like this");
});

let a1 = [["no one"], [], [], [" likes", "this"]]; // 0: no one -> name
let a2 = [["Alex"], [], [], [" likes", "this"]];  // 1: append, 3: likes -> like
let a3 = [["Alex"], [" and", "Jacob"], [], [" like", "this"]]; // 1: " and" -> "," / 2: append
let a4 = [["Alex"], [",", "Jacob"], ["and", "Mark"], [" like", "this"]];
let a5 = [["Alex"], [",", "Jacob"], ["and", "2 others"], [" like", "this"]];

function test(parameter, expected) {
    const actual = likes([...parameter]);
    it(`case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.equal(actual, expected);
    });
}
