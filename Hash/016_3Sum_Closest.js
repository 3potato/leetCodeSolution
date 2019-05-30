/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function sortNumber(a, b) {
    return a - b
}

var threeSumClosest = function(nums, target) {
    nums.sort(sortNumber)
    let sum = nums[0] + nums[1] + nums[nums.length - 1]
    for (var i = 0; i < nums.length; i++) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            if(Math.abs(target - (nums[i] + nums[l] + nums[r])) < Math.abs(target - sum)) {
                sum = nums[i] + nums[l] + nums[r]
            }
            if (nums[l] + nums[r] == target - nums[i]) {
                return sum
            }else if (nums[l]+nums[r] > target - nums[i]) {
                r--
            }else {
                l++
            }

        }
    }
    return sum
};