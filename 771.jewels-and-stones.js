/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let num = 0;
    let hash = {};
    for (let i = 0; i < J.length; i++) {
        let ele = J[i]
        hash[ele] = true;
    }
    for (let i = 0; i < S.length; i++) {
        let ele = S[i];
        if (hash[ele]) {
            num += 1;
        }
    }

    return num;
};

