/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let answer = [];
    A.forEach(num => {
        if (num % 2 === 0) {
            answer.unshift(num);
        } else {
            answer.push(num);
        }
    });
    return answer;
};

