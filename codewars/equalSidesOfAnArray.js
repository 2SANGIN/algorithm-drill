/*
 * Equal Sides Of An Array
 * https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
 * Complexity: O(2n)
 */
function findEvenIndex(arr) {
    let left  = 0;
    let right = arr.reduce((sum, val) => sum + val);

    for (let index = 0; index < arr.length; index++) {
        left += arr[index - 1] || 0;
        right -= arr[index];

        if (left === right) {
            return index;
        }
    }
    return -1;
}

const {assert} = require("chai");

describe("Equal Sides Of An Array", function () {
    test([1, 2, 3, 4, 3, 2, 1], 3, "The array was: [1,2,3,4,3,2,1]");
    test([1, 100, 50, -51, 1, 1], 1, "The array was: [1,100,50,-51,1,1]");
    test([1, 2, 3, 4, 5, 6], -1, "The array was: [1,2,3,4,5,6]");
    test([20, 10, 30, 10, 10, 15, 35], 3, "The array was: [20,10,30,10,10,15,35]");
    test([20, 10, -80, 10, 10, 15, 35], 0, "The array was: [20,10,-80,10,10,15,35]");
    test([1, 3, 5, 4], 2, "The array was: [1,3,5,4]");
    test([25, -25, -100, 100], -1, "The array was: [25,-25,-100,100]");
    test([25, -25, -100, 100, 1], 4, "The array was: [25,-25,-100,100,1]");
});

function test(parameter, expected, title) {
    const actual = findEvenIndex(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
