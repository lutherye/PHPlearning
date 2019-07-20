/*
 * @lc app=leetcode id=1 lang=php
 *
 * [1] Two Sum
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
            for ($i=0; $i < count($nums); $i++){
            $num1 = $nums[$i];
                for ($j=$i+1; $j< count($nums); $j++) {
                    $num2 = $nums[$j];
                    if ($num1 + $num2 === $target) {
                        return [$i, $j];
                    }
                }
        }
    }
}

