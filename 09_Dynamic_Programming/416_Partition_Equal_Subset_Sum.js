/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 2 !== 0)  return false
    let C = sum / 2

    let memo = Array.from(Array(nums.length + 1), () => -1)

    for (var i = 1; i <= C; i++) {
        memo[i] = (nums[0] == i)
    }

    for (var i = 1; i < nums.length; i++) {
        for (var j = C; j >= nums[i]; j--) {
            memo[j] = memo [j] || memo[j - nums[i]]
        }
    }
    return memo[C]
};