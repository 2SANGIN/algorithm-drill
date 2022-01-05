/*
 * validate sdoku with size N x N
 * https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript
 */
const Sudoku = function (data) {
    //   Private methods
    // -------------------------
    function validateSize() {
        return data.every(row => row.length === data.length);
    }


    //   Public methods
    // -------------------------
    return {
        isValid: function () {
            if (!validateSize()) {
                return false;
            }

            let size = data.length;
            let blockSize = Math.sqrt(size);


            if (!data.map(row => new Set(row))
                     .every(row => row.size === size)) {
                return false;
            }

            let transpose = data.reduce((matrix, row) => row.map((val, colIndex) => matrix[colIndex].add(val)), data.map(() => new Set()))
                                .every(row => row.size === size);

            if (!transpose) {
                return transpose;
            }


            return true;
        }
    };
};


const goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

const goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);

const badSudoku1 = new Sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]);

const badSudoku2 = new Sudoku([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]
]);

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sudoku", function () {
    it("should be valid", function () {
        assert.isTrue(goodSudoku1.isValid());
        assert.isTrue(goodSudoku2.isValid());
    });

    it("should be invalid", function () {
        assert.isFalse(badSudoku1.isValid());
        assert.isFalse(badSudoku2.isValid());
    });
});
