/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */


/*
*
* Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

var lengthOfLongestSubstring = function(s) {
    let freq = new Array()
    let l = 0
    let res = 0
    for (let r = 0 ; r < s.length;){
        if (!freq[s[r]]){
            freq[s[r]] = 1
            r++
            res = Math.max(res, r - l)
        }else {
            freq[s[l]] = 0
            l++
        }
    }
    return res
};