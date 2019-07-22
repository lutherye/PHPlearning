/*
 * @lc app=leetcode id=13 lang=php
 *
 * [13] Roman to Integer
 */
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $dictionary = array(
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000,
        );
        $total = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if ($dictionary[$s[$i]] < $dictionary[$s[$i+1]]) {
                $total += ($dictionary[$s[$i+1]] - $dictionary[$s[$i]]);
                $i++;
            } else {
                $total += $dictionary[$s[$i]];
            }
        }
        return $total;
    }
}

