/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i+1] && prices[i+1] > prices[i]) {
            total += prices[i+1] - prices[i];
        }
    }
    return total;
};

