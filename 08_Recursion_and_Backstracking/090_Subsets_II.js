/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var generateSet = function (res, nums, path, start) {
    for (var i = start; i < nums.length; i++) {
        if (i > start && nums[i] == nums[i -1]) continue
        path.push(nums[i])
        res.push(path.concat())
        generateSet(res, nums, path.concat(), i + 1)
        path.pop()
    }
}

var subsetsWithDup = function(nums) {
    let res = [[]]
    nums.sort((a, b) => {
        return a - b
    })
    generateSet(res, nums, [], 0)
    return res
};



var generateSet = function (res, nums, path, start) {
    res.push(path.concat())
    for (var i = start; i < nums.length; i++) {
        if (i > start && nums[i] == nums[i -1]) continue
        path.push(nums[i])
        generateSet(res, nums, path.concat(), i + 1)
        path.pop()
    }
}

var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a, b) => {
        return a - b
    })
    generateSet(res, nums, [], 0)
    return res
}