/**
 * @param {number} n
 * @return {number}
 */
// 递归回溯 超时
var integerBreak = function(n) {
    if (n == 0 || n == 1) return 1
    let res = -1
    for (var i = 1; i < n; i++) {
        res = Math.max(res, i * (n - i), i * integerBreak(n - i))
    }
    return res
};

// 递归回溯 优化 超时
var getInteger = function(n, memo){
    if (n == 0 || n == 1) return 1
    if(memo[n] != -1) return memo[n]

    let res = -1
    for (var i = 1; i < n; i++) {
        res = Math.max(res, i * (n - i), i * integerBreak(n - i))
    }
    memo[n] = res
    return memo[n]
}
var integerBreak = function(n) {
    let memo = Array.from(Array(n + 1), () => -1)
    return getInteger(n, memo)
};

// 动态规划
var integerBreak = function(n) {
    let memo = Array.from(Array(n + 1), () => -1)
    memo[0] = memo[1] = 1
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j < i; j++) {
            memo[i] = Math.max(j * (i - j), j * memo[i - j], memo[i])
        }
    }
    return memo[n]
};