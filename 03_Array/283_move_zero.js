/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
*/


let swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 方法一
let moveZeroes = function (nums) {
    let sum = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            i--
        }
    }
    for (let j = nums.length; j < sum; j++) {
        nums.push(0)
    }
};

// 方法二
let moveZeroes = function (nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (k != i) {
                swap(nums, k, i)
            }
            k++
        }
    }
};


// 结果错误 非0的数字顺序不对
let moveZeroes = function (nums) {
    let i = 0
    let j = nums.length - 1
    while (i < j){
        if(nums[i] == 0) {
            while (nums[j] == 0){
                j--
            }
            swap(nums, i, j)
        }
        i++
    }
};

