/*
 * Adding Big Numbers
 * https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
 */
function add(a, b) {
    let res = [], carry = 0;

    const op1 = a.split('').map(str => Number(str));
    const op2 = b.split('').map(str => Number(str));

    while (op1.length || op2.length || carry) {
        let sum = (op1.pop() || 0) + (op2.pop() || 0) + carry;
        res.push(sum % 10);
        carry = sum > 9;
    }

    return res.reverse().join("");
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
describe("Add two numbers", function () {
    it("should pass basic tests", function () {
        assert.equal(add("1", "1"), "2");
        assert.equal(add("123", "456"), "579");
        assert.equal(add("888", "222"), "1110");
        assert.equal(add("1372", "69"), "1441");
        assert.equal(add("12", "456"), "468");
        assert.equal(add("101", "100"), "201");
        assert.equal(add("63829983432984289347293874", "90938498237058927340892374089"), "91002328220491911630239667963")
    });
});
