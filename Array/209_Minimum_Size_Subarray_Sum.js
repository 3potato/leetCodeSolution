/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */


var minSubArrayLen = function(s, nums) {
    let sum = 0
    let l = -1
    let res = nums.length + 1
    for(let i = -1; i < nums.length;) {
        if (sum >= s) {
            res = Math.min(i - l, res)
            l++
            sum -= nums[l]
        }else{
            i++
            sum += nums[i]
        }
    }
    if (res === nums.length + 1) {
        res = 0
    }
    return res
};
