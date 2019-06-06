/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let dictionary = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (dictionary[char]) {
            dictionary[char] += 1;
        } else {
            dictionary[char] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!dictionary[char]) return false;
        dictionary[char] -= 1;
        if (dictionary[char] < 0) return false;
    }

    return true;
};

