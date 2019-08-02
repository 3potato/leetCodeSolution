/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var generateCombination = function(c, t, res, path, start) {
    for (var i = start; i < c.length; i++) {
        if (i > start && c[i] == c[i - 1]) continue
        path.push(c[i])
        if (c[i] == t){
            res.push(path.concat())
        }else if (c[i] < t){
            generateCombination(c, t - c[i], res, path.concat(), i + 1)
        }
        path.pop()
    }
};


var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => {
        return a - b
    })
    generateCombination(candidates, target, res, [], 0)
    return res
};