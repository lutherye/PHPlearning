/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let answer = [];
    for (let i = 0; i < A.length; i++) {
        let pow = Math.pow(A[i], 2);
        let x = answer.length;
        answer.push(pow)

    }
    return answer.sort((a, b) => { return a - b });
};

