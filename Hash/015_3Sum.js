/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function sortNumber(a, b) {
    return a - b
}

var threeSum = function(nums) {
    let arr = []
    nums.sort(sortNumber)

    for (var i = 0; i < nums.length; i++) {
        while (nums[i] == nums[i - 1]) i++
        let l = i + 1
        let r = nums.length - 1

        if (nums[i] > 0) break

        while (l < r) {
            if (nums[l]+nums[r] == -nums[i]) {
                arr.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while (nums[l] == nums[l - 1] && l < r) l++
                while (nums[r] == nums[r + 1] && l < r) r--
            }else if (nums[l]+nums[r] > -nums[i]) {
                r--
                while (nums[r] == nums[r + 1] && l < r) r--
            }else {
                l++
                while (nums[l] == nums[l - 1] && l < r) l++
            }
        }
    }
    return arr
};