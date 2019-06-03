/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
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