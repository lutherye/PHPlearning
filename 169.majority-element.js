/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let arr = {};
    nums.forEach(num => {
        if (arr[num]) {
            arr[num]++
        } else {
            arr[num] = 1;
        }
    })
    let answer;
    nums.forEach(num => {
        if (arr[num] > nums.length / 2) {
            answer = num
        }
    })
    return answer;
};

