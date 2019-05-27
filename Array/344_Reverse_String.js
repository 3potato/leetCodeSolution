/**
* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.
*/
let swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var reverseString = function(s) {
    let l = 0
    let r = s.length - 1
    while (l < r){
        swap(s, l, r)
        l++
        r--
    }
};