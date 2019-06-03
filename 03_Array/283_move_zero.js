/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 方法一
let moveZeroes = function(nums) {
   for (let i = 0; i < nums.length; i++){
       if(nums[i] == 0){
           nums.splice(i, 1)
           i--
       }
   }
   for (let j = nums.length; j<sum; j++){
       nums.push(0)
   }
};

// 方法二
let moveZeroes = function(nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            if (k != i){
                swap(nums, k, i)
            }
            k++
        }
    }
};

