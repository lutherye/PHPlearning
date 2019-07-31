/*
 * @lc app=leetcode id=1051 lang=php
 *
 * [1051] Height Checker
 */
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights) {
        $temp = $heights;
        sort($temp);
        $diff = array_diff_assoc($heights, $temp);
        return count($diff);
    }
}

