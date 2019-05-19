/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            j++;
            i++;
        }
    }
    return i + 1;
};

