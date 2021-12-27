/*
 * Pete, the baker
 * https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
 */
function cakes(recipe, available) {
    return Object.entries(recipe)
                 .map(([ingredient, requiredAmount]) => Math.floor(available[ingredient] / requiredAmount || 0))
                 .reduce((minimumCount, eachCount) => Math.min(minimumCount, eachCount));
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("description example", function () {
    let recipe, available;

    it("pass example tests", function () {
        recipe = {flour: 500, sugar: 200, eggs: 1};
        available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
        assert.equal(cakes(recipe, available), 2, "Wrong result for example #1");

        recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
        available = {sugar: 500, flour: 2000, milk: 2000};
        assert.equal(cakes(recipe, available), 0, "Wrong result for example #2");
    });
});
