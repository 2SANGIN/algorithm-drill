/*
 * Sudoku Solution Validator
 * https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
 * Complexity: O(n^2)
 */
function validSolution(board) {
    for (let row of board) {
        const rotate = {};

        for (let col = 0; col < 9; col++) {
            if (rotate[row[col]]) {
                return false;
            }

            rotate[row[col]] = true;
        }
    }

    for (let col = 0; col < 9; col++) {
        const rotate = {};

        for (let row = 0; row < 9; row++) {
            if (rotate[board[row][col]]) {
                return false;
            }

            rotate[board[row][col]] = true;
        }
    }

    for (let block = 0; block < 9; block++) {
        const rowOffset = Math.floor(block / 3) * 3;
        const colOffset = (block % 3) * 3;
        const rotate    = {};

        for (let row = rowOffset; row < rowOffset + 3; row++) {
            for (let col = colOffset; col < colOffset + 3; col++) {
                if (rotate[board[row][col]]) {
                    return false;
                }

                rotate[board[row][col]] = true;
            }
        }
    }
    return true;
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
