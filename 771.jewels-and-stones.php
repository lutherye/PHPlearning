/*
 * @lc app=leetcode id=771 lang=php
 *
 * [771] Jewels and Stones
 */
class Solution {

    /**
     * @param String $J
     * @param String $S
     * @return Integer
     */
    function numJewelsInStones($J, $S) {
        $counter = 0;
        for($i = 0; $i < strlen($S); $i++) {
            if(strpos($J, $S[$i]) !== false) {
                $counter+=1;
            }
        }
        return $counter;
    }
}

