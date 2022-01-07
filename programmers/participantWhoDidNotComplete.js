/*
 * 완주하지 못한 선수
 * https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */
function solution(participants, completions) {
    const partiMap = participants.reduce((obj, participant) => {
        obj[participant] = obj[participant] + 1 || 1;
        return obj;
    }, {});

    completions.forEach(comp => {
        if (--partiMap[comp] === 0) {
            delete partiMap[comp];
        }
    });

    return Object.keys(partiMap).pop();
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("완주하지 못한 선수", function () {
    it("should pass", function () {
        assert.equal(solution(["leo", "kiki", "eden"], ["eden", "kiki"]), "leo");
        assert.equal(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]), "vinko");
        assert.equal(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]), "mislav");
    });
});
