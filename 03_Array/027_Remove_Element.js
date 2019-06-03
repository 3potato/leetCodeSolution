/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 方法一
var removeElement = function(nums, val) {
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

// 方法二
var removeElement = function(nums, val) {
    let k = nums.length - 1
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] == val){
            if (i != k){
                swap(nums, i, k)
            }
            k--
        }
    }
    nums.length = k + 1
    return k + 1
};
