/**
 * @param {string} s
 * @return {string[][]}
 */

var getPart = function(s, dp, res, path, count) {
    if (count == s.length && path.length != 0) return res.push(path)
    for (var i = count; i < s.length; i++) {
        if (dp[count] && dp[count][i]) {
            path.push(s.substring(count, i + 1))
            getPart(s, dp, res, JSON.parse(JSON.stringify(path)), i + 1)
            path.pop()
        }
    }
};

var partition = function(s) {
    if (s == '') return [[]]
    let res = []
    let path = []
    let dp = []
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j <= i; j++) {
            if(s.charAt(i) == s.charAt(j) && (i - j <= 2 || dp[j + 1][i - 1])) {
                dp[j] ? '' : dp[j] = []
                dp[j][i] = true
            }
        }
    }
    getPart(s, dp, res, path, 0)
    return res
};