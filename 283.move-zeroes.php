/*
 * @lc app=leetcode id=283 lang=php
 *
 * [283] Move Zeroes
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums) {
        $i = 0;
        $numbers = array();
        $zeros = array();
        while ($i < count($nums)) {
            if ($nums[$i] === 0) {
                array_push($zeros, $nums[$i]);
            } else {
                array_push($numbers, $nums[$i]);
            }
        }
        return array_merge($numbers, $zeros);
    }
}

