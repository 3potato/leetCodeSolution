/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    let l = 0
    for (var i = 0; i < nums.length; i++) {
        if (i - l > k){
            map.delete(nums[l])
            l++
        }
        if (map.get(nums[i])){
            return true
        }else {
            map.set(nums[i], 1)
        }
    }
    return false
};