/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums.length) return null;
    let idx = 0;
    while (idx < nums.length ) {
        let num = nums[idx];
        if (num === 0 && idx === 0) {
            nums.splice(idx, 1);
            nums.push(0);
        } else {
            idx ++;
        }
    }

    return nums;
};

