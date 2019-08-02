/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var generateCombine = function(n, k, res, path, start) {
    if (path.length == k) {
        res.push(path)
        return
    }
    for (var i = start; i <= n - (k - path.length) + 1; i++) {
        path.push(i)
        generateCombine(n, k, res, path.concat(), i + 1)
        path.pop()
    }
};
var combine = function(n, k) {
    let res = []
    generateCombine(n, k, res, [], 1)
    return res
};