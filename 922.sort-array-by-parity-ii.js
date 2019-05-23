/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let odd = 1;
    let even = 0;
    while ((odd < A.length - 1) || (even < A.length)) {
        let oddHolder;
        let evenHolder;
        if (A[odd] % 2 === 0) {
            oddHolder = A[odd];
        } else {
            odd += 2;
        }
        if (A[even] % 2 !== 0) {
            evenHolder = A[even];
        } else {
            even += 2;
        }
        if (oddHolder !== undefined && evenHolder !== undefined) {
            A[odd] = evenHolder;
            A[even] = oddHolder;
        }
    }
    return A;
};

