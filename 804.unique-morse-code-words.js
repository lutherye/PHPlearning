/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const mors = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const alpha = ["a", "b", "c", "d", "e", "f", "g", 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let dictionary = new Set();
    words.forEach(word => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            let idx = alpha.indexOf(char);
            newWord = newWord + mors[idx];
        }
        if (newWord in dictionary) {
        } else {
            dictionary.add(newWord);
        }
    });
    return dictionary.size;
};

