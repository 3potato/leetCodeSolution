/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let containKey = function (map, key) {
    for (var k of map.keys()) {
        if (k == key){
            return map.get(k)
        }
    }
    return -1
}
var twoSum = function(nums, target) {
    let map = new Map()
    let res = []
    for (var i = 0; i < nums.length; i++) {
        if (containKey(map, target - nums[i]) != -1) {
            return res = [containKey(map, target - nums[i]), i]
        }else {
            map.set(nums[i], i)
        }
    }
};