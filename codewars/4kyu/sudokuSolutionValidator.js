/*
 * Sudoku Solution Validator
 * https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
 * Complexity: O(n^2)
 */
function validSolution(board) {
    const sumArray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            sumArray[0][row] += board[row][col];
            sumArray[1][col] += board[row][col];
            sumArray[2][Math.floor(row / 3) * 3 + Math.floor(col / 3)] += board[row][col];
        }
    }
    return [].concat(...sumArray).every(sum => sum === 45);
}

const {assert} = require("chai");

describe("Sudoku Solution Validator", function () {
    test([[5, 3, 4, 6, 7, 8, 9, 1, 2],
          [6, 7, 2, 1, 9, 5, 3, 4, 8],
          [1, 9, 8, 3, 4, 2, 5, 6, 7],
          [8, 5, 9, 7, 6, 1, 4, 2, 3],
          [4, 2, 6, 8, 5, 3, 7, 9, 1],
          [7, 1, 3, 9, 2, 4, 8, 5, 6],
          [9, 6, 1, 5, 3, 7, 2, 8, 4],
          [2, 8, 7, 4, 1, 9, 6, 3, 5],
          [3, 4, 5, 2, 8, 6, 1, 7, 9]], true);

    test([[5, 3, 4, 6, 7, 8, 9, 1, 2],
          [6, 7, 2, 1, 9, 0, 3, 4, 8],
          [1, 0, 0, 3, 4, 2, 5, 6, 0],
          [8, 5, 9, 7, 6, 1, 0, 2, 0],
          [4, 2, 6, 8, 5, 3, 7, 9, 1],
          [7, 1, 3, 9, 2, 4, 8, 5, 6],
          [9, 0, 1, 5, 3, 7, 2, 1, 4],
          [2, 8, 7, 4, 1, 9, 6, 3, 5],
          [3, 0, 0, 4, 8, 1, 1, 7, 9]], false);
});

function test(parameter, expected, title) {
    const actual = validSolution(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
