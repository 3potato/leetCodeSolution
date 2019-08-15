/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 0) return []
    let memo = Array.from(Array(nums.length), () => 1)
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if(nums[j] < nums[i]){
                memo[i] = Math.max(memo[i], 1 + memo[j])
            }
        }
    }
    let res = 1
    for (var i = 0; i < memo.length; i++) {
        res = Math.max(res, memo[i])
    }
    return res
};