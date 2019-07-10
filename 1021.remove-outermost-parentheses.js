/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let counter = 0;
    let newStr = ""
    for (let i = 0; i < S.length; i++) {
        if ((S[i] === "(" && ++counter !== 1) || (S[i] === ")" && --counter !== 0)) {
            newStr += S[i]
        }
    }
    return newStr;
};

