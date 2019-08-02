/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var getPer = function(nums, res, path) {
    if (nums.length == 0){
        res.push(path)
        return
    }
    let set = new Set()
    for (var i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            let copyNums = nums.concat()
            set.add(nums[i])
            copyNums.splice(i, 1)
            path.push(nums[i])
            getPer(copyNums, res, path.concat())
            path.pop()
        }
    }
};
var permuteUnique = function(nums) {
    let res = []
    getPer(nums, res, [])
    return res
};


let swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
var getPer = function(nums, res, start) {
    if (nums.length == start){
        res.push(nums.concat())
        return
    }
    let set = new Set()
    for (var i = start; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
            swap(nums, start, i)
            getPer(nums, res, start + 1)
            swap(nums, start, i)
        }
    }
};
var permuteUnique = function(nums) {
    let res = []
    getPer(nums, res, 0)
    return res
};
