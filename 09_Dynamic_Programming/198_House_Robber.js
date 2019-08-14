/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums.length <= 0) return 0
    let memo = Array.from(Array(nums.length), () => -1)
    memo[0] = nums[0]
    for (var i = 1; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 1], nums[i] + (i - 2 >= 0 ? memo[i - 2] : 0))
    }
    return memo[nums.length - 1]
};