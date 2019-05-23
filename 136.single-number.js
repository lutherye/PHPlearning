/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answers = {};

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        if ( answers[ele] === undefined ) {
            answers[ele] = true;
            debugger
        } else if (answers[ele] === true ) {
            answers[ele] = false;
            debugger
        }
    }
    let keys = Object.keys(answers);
    let filtered = keys.filter(num => {
        return answers[num];
    });
    return filtered;
};

