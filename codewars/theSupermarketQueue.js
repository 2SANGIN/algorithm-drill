/*
 * The Supermarket Queue
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
 * Complexity: O(n)
 */
function queueTime(customers, n) {
    const requiredLength = Math.max(Math.min(n, customers.length), 1);

    return customers.reduce((tills, newCustomerTime) => {
        const newTimeTill = tills.pop() + newCustomerTime;

        let maxTillIndex = tills.findIndex(otherTill => newTimeTill > otherTill);
        if (maxTillIndex > -1) {
            tills.splice(maxTillIndex, 0, newTimeTill);
        } else {
            tills.push(newTimeTill);
        }
        return tills;
    }, Array(requiredLength).fill(0)).shift();
}

const {assert} = require("chai");

describe("The Supermarket Queue", function () {
    test([], 1, 0);
    test([1, 2, 3, 4], 1, 10);
    test([2, 2, 3, 3, 4, 4], 2, 9);
    test([1, 2, 3, 4, 5], 100, 5);
    test([2, 3, 10], 2, 12);
    test([31, 36, 14, 43, 20, 7, 19, 15, 1, 28, 9, 50, 38], 6, 79);
});

function test(customers, n, expected, title) {
    const actual = queueTime(customers, n);
    it(title || `case [${customers}], n=${n} -> Expected ${expected}, got ${actual}`, () => {
        assert.strictEqual(actual, expected);
    });
}
