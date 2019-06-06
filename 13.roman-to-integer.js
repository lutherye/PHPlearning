/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dictionary = { "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++ ) {
        if (s[i+1] && dictionary[s[i+1]] > dictionary[s[i]] ) {
            total += dictionary[s[i+1]] - dictionary[s[i]];
            i++;
        } else {
            total += dictionary[s[i]];
        }
    }
    return total;
};

