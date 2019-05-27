/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var swap = function(arr, l, r) {
    let i = arr[l]
    arr[l] = arr[r]
    arr[r] = i
}
var sortColors = function(nums) {
    let k = 0
    let v = nums.length - 1
    for (let i = 0; i <= v; i++){
        if (nums[i] == 0){
            swap(nums, k++, i)
        }else if (nums[i] == 2){
            swap(nums, v--, i--)
        }
    }
};