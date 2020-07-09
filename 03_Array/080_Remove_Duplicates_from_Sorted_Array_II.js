/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let k = 0
    let count = 1
    for(let i = 1; i<nums.length; i++) {
        if(nums[i] != nums[k]){
            k++
            count = 1
            if(k != i){
                nums[k] = nums[i]
            }
        }else {
            if (count == 1){
                k++
                count = 2
            }
        }
    }
    nums.length = k + 1
    return k + 1
};



