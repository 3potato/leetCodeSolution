/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var generateCombination = function(c, t, res, path, start) {
    for (var i = start; i < c.length; i++) {
        path.push(c[i])
        if (c[i] == t){
            res.push(path.concat())
        }else if (c[i] < t){
            generateCombination(c, t - c[i], res, path.concat(), i)
        }
        path.pop()
    }
};

var combinationSum = function(candidates, target) {
    let res = []
    generateCombination(candidates, target, res, [], 0)
    return res
};