/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(arr) {
        const result = {};
        for (let i = 0; i < arr[0].length; i++) {
            let ele = arr[0][i];
            if (result[ele]) {
                result[ele] += 1;
            } else {
                result[ele] = 1;
            }
        }
        for (let i = 1; i < arr.length; i++) {
            const hash = {};
            let word = arr[i];

            for (let j = 0; j < word.length; j++) {
                let char = word[j];
                if (hash[char]) {
                    hash[char] += 1;
                } else {
                    hash[char] = 1;
                }
            }
            let first = arr[0].split('');
            first.forEach(char => {
                let res = result[char];
                let h = hash[char];
                if (res && h) {
                    if (res < h) {
                        result[char] = res;
                    } else {
                        result[char] = h;
                    }
                } else {
                    result[char] = 0;
                }
            });
        }

        let keys = Object.entries(result);
        let ans = [];
        keys.forEach(subarr => {
            for (let i = subarr[1]; i > 0; i--) {
                ans.push(subarr[0]);
            }
        });

        return ans;
};

// console.log(commonChars(["bella", "label", "roller"]));
