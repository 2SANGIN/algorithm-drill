/*
 * Number of trailing zeros of N!
 * https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/javascript
 */
function zeros(n) {
    let numbers = 0;
    while (n >= 5) {
        numbers += (n = Math.floor(n / 5));
    }
    return numbers;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("number of trailing zeros of N factorial", function () {
    it("Should pass sample tests", function () {
        assert.equal(zeros(0), 0, "Testing with n = 0")
        assert.equal(zeros(5), 1, "Testing with n = 5")
        assert.equal(zeros(6), 1, "Testing with n = 6")
        assert.equal(zeros(30), 7, "Testing with n = 30")
    });
});

// 5 10 15 20 25 30


//
