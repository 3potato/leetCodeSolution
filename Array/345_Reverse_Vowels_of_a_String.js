/**
 * @param {string} s
 * @return {string}
 */

let isVowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
}
var reverseVowels = function(s) {
    let arr = s.split('')
    let l = 0
    let r = arr.length - 1
    while (l < r){
        if (isVowels[arr[l]] && isVowels[arr[r]]){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }else if (isVowels[arr[l]]){
            r--
        }else {
            l++
        }
    }
    return arr.join('')
};

