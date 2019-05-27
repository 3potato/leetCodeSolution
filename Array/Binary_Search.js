/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var binarySearch = function(arr, l, r, target) {
    let l = l
    let r = r
    let mid = Math.floor(l + (r - l)/2)
    if (arr[mid] == target){
        return arr[mid]
    }else if(arr[mid] > target){
        r = mid - 1
    }else{
        l = mid + 1
    }
    if (l < r ){
        binarySearch(arr, l, r, target)
    }else {
        return -1
    }
};

var binarySearch = function(arr, l, r, target) {
    let l = l
    let r = r
    let mid
    while (l < r){
        mid = Math.floor(l + (r - l)/2)
        if (arr[mid] == target){
            return arr[mid]
        }else if(arr[mid] > target){
            r = mid - 1
        }else{
            l = mid + 1
        }
    }

    return -1
};