/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var swap = function(arr, l, r) {
    let i = arr[l]
    arr[l] = arr[r]
    arr[r] = i
}
var quickSelect = function (nums, index, lt, j) {
    let i = lt + 1
    let point = nums[lt]

    while (i <= j) {
        if (nums[i] < point){
            i++
        }
        if (nums[j] >= point){
            j--
        }
        if(i < j){
            swap(nums, i, j)
        }
    }
    swap(nums, lt, j)
    if (index == j){
        return nums[j]

    }else if (index < j){
        return quickSelect(nums, index, lt, j)
    }else{
        return quickSelect(nums, index, j+1, nums.length - 1)
    }
}
var findKthLargest = function(nums, k) {
    return quickSelect(nums, nums.length - k, 0, nums.length - 1)
};
