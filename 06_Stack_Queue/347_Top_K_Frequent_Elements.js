/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let rec = new Array(nums.length + 1)
    let ret = []

    for (var i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) > 0){
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }

    }

    for (var [key, value] of map.entries()) {
        rec[value] ? rec[value].push(key) : rec[value] = [key]
    }

    for (var i = rec.length - 1; i >= 0 && k > 0; i--) {
        if (rec[i] != undefined){
            for (var j = 0; j < rec[i].length && k > 0; j++) {

                ret.push(rec[i][j])
                k--

            }
        }
    }
    return ret
};