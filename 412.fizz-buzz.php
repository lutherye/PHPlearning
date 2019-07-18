/*
 * @lc app=leetcode id=412 lang=php
 *
 * [412] Fizz Buzz
 */
class Solution {

    /**
     * @param Integer $n
     * @return String[]
     */
    function fizzBuzz($n) {
                $answer = array();
        $count = 1;
        while ($count <= $n) {
            if (($count % 3 === 0) && ($count % 5 === 0)) {
                array_push($answer, "FizzBuzz");
            } elseif ($count % 3 === 0){
                array_push($answer, "Fizz");
            } elseif ($count % 5 === 0) {
                array_push($answer, "Buzz");
            } else {
                array_push($answer, "$count");
            }
            $count++;
        }
        return $answer;
    }
}

