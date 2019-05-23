/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let answers = {};
     A = A.split(" ");
     B = B.split(" ");
    for (let i = 0; i < A.length; i++) {
        let ele = A[i];
        if (answers[ele] === undefined) {
            answers[ele] = true;
        } else if (answers[ele] === true) {
            answers[ele] = false;
        }
    }

    for (let i = 0; i < B.length; i++) {
        let ele = B[i];
        if (answers[ele] === undefined) {
            answers[ele] = true;
        } else if (answers[ele] === true) {
            answers[ele] = false;
        }
    }
    let keys = Object.keys(answers);
    let filtered = keys.filter(word => {
        return answers[word];
    });

    return filtered;
};

