/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let set = new Set()
    for (var i = 0; i < nums.length; i++) {
        if (i > k ){
            set.delete(nums[i - k - 1])
        }
        for (let key of set.keys()) {
            if (Math.abs(nums[i] - key) <= t){
                return true
            }
        }
        set.add(nums[i])
    }
    return false
};