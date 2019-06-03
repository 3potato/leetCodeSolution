/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let aMap = new Map()
    let arr = []
    for (var i = 0; i < nums1.length; i++) {
        if (!aMap.has(nums1[i])){
            aMap.set(nums1[i], 1)
        }else {
            aMap.set(nums1[i], +aMap.get(nums1[i]) + 1)
        }
    }
    for (var j = 0; j < nums2.length; j++) {
        if (aMap.get(nums2[j]) > 0){
            arr.push(nums2[j])
            aMap.set(nums2[j], aMap.get(nums2[j]) - 1)
        }
    }
    return arr
};