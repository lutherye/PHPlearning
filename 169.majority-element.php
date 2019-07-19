/*
 * @lc app=leetcode id=169 lang=php
 *
 * [169] Majority Element
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        $tracker = array();
        for ($i = 0; $i < count($nums); $i++) {
            $ele = $nums[$i];
            $tracker[$ele]++;
            if ($tracker[$ele] > count($nums) / 2) {
                return $ele;
            }
        }
    }
}

