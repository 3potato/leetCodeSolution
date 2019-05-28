/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let aSet = new Set(nums1)
    let bSet = new Set(nums2)
    let arr = []

    bSet.forEach((item) => {
        if (aSet.has(item)) {
            arr.push(item)
        }
    })
    return arr
};