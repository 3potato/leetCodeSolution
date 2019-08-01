/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getPer = function(nums, res, path) {
    if (nums.length == 0){
        res.push(path)
        return
    }
    for (var i = 0; i < nums.length; i++) {
        let copyNums = JSON.parse(JSON.stringify(nums))
        copyNums.splice(i, 1)
        path.push(nums[i])
        getPer(copyNums, res, JSON.parse(JSON.stringify(path)))
        path.pop()
    }
};
var permute = function(nums) {
    let res = []
    getPer(nums, res, [])
    return res
};



var getPer = function(nums, res, path) {
    if (path.length == nums.length) {
        res.push(path)
        return
    }
    for(var i = 0; i < nums.length; i++) {
        if(path.indexOf(nums[i]) != -1) continue
        path.push(nums[i])
        getPer(nums, res, JSON.parse(JSON.stringify(path)))
        path.pop()
    }
};
var permute = function(nums) {
    let res = []
    getPer(nums, res, [])
    return res
};