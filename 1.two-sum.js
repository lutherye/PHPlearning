/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let idx = 0; idx < nums.length; idx++) {
        const other = target - nums[idx];
        if (other in map) {
            return [map[other], idx];
        }
        map[nums[idx]] = idx;
    }
};

