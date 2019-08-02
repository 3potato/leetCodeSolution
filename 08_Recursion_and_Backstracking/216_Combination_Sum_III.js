/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var generateCombination = function(k, t, res, path, sum, start) {
    for (var i = start; i < 10; i++) {
        path.push(i)
        if (path.length == k && sum + i == t){
            res.push(path.concat())
        }else if (path.length < k && sum + i < t){
            generateCombination(k, t, res, path.concat(), sum + i , i + 1)
        }
        path.pop()
    }
};


var combinationSum3 = function(k, n) {
    let res = []
    generateCombination(k, n, res, [], 0, 1)
    return res
};