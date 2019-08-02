/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var generateSet = function (res, nums, path, start) {

    for (var i = start; i < nums.length; i++) {
        path.push(nums[i])
        res.push(path.concat())
        generateSet(res, nums, path.concat(), i + 1)
        path.pop()
    }
}

var subsets = function(nums) {
    let res = [[]]
    generateSet(res, nums, [], 0)
    return res


var generateSet = function (res, nums, path, start) {
    res.push(path.concat())
    for (var i = start; i < nums.length; i++) {
        path.push(nums[i])
        generateSet(res, nums, path.concat(), i + 1)
        path.pop()
    }
}

var subsets = function(nums) {
    let res = []
    generateSet(res, nums, [], 0)
    return res
}