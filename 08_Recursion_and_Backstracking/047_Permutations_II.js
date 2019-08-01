/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var getPer = function(nums, res, path, numsAll) {
    if (nums.length == 0){
        res.push(path)
        return
    }
    for (var i = 0; i < nums.length; i++) {
        let copyNums = JSON.parse(JSON.stringify(nums))
        let copyNumsAll = JSON.parse(JSON.stringify(numsAll))
        let subNums = copyNumsAll.slice(0, i)
        if (subNums.indexOf(nums[i]) != -1) continue
        copyNums.splice(i, 1)
        path.push(nums[i])
        getPer(copyNums, res, JSON.parse(JSON.stringify(path)), numsAll)
        path.pop()
    }
};
var permuteUnique = function(nums) {
    let res = []
    getPer(nums, res, [], nums)
    return res
};