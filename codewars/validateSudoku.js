/*
 * validate sudoku with size N x N
 * https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript
 */
const Sudoku = function (data) {
    return {
        isValid: function () {
            let maxNumber = data.length;
            let sideLength = Math.sqrt(maxNumber);

            let indexes = [...Array(maxNumber)
                .keys()];
            return indexes.map(blockNo => {
                const horizontal = indexes.reduce((set, index) => set.add(data[blockNo][index] || 0), new Set());
                const vertical = indexes.reduce((set, index) => set.add(data[index][blockNo] || 0), new Set());
                const square = indexes.reduce((set, index) => {
                    let y = (Math.floor(blockNo / sideLength) * sideLength) + (Math.floor(index / sideLength));
                    let x = (blockNo % sideLength) * sideLength + index % sideLength;
                    return set.add(data[y][x] || 0);
                }, new Set());

                return [horizontal, vertical, square];
            })
                          .reduce((allOfBlock, hvsBlocks) => allOfBlock.concat(hvsBlocks), [])
                          .map(boxSet => [...boxSet])
                          .every(box => box.filter(num => num > 0 && num <= maxNumber).length === maxNumber);
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

const goodSudoku3 = new Sudoku([[1]]);

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

const badSudoku3 = new Sudoku([[2]]);

const badSudoku4 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [7, 9, 5, 1, 8, 2, 6, 3, 4]
]);

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sudoku", function () {
    it("should be valid", function () {
        assert.isTrue(goodSudoku1.isValid());
        assert.isTrue(goodSudoku2.isValid());
        assert.isTrue(goodSudoku3.isValid());
    });

    it("should be invalid", function () {
        assert.isFalse(badSudoku1.isValid());
        assert.isFalse(badSudoku2.isValid());
        assert.isFalse(badSudoku3.isValid());
        assert.isFalse(badSudoku4.isValid());
    });
});
