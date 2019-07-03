/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let size = A.length / 2;
    let hash = {};
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        if (hash[num] === undefined) {
            hash[num] = 1;
        } else {
            hash[num]++
        }
        if (hash[num] === size) return num;
    }
};

