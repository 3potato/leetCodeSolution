/**
 * @param {number} n
 * @return {number}
 */

// 递归回溯 优化 超时
var getClimb = function(n, memo) {
    if(n == 0 || n == 1) return 1
    if(memo[n] == undefined || memo[n] == null){
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2)
    }
    return memo[n]
}
var climbStairs = function(n) {
    let memo = Array(n)
    memo[0] = memo[1] = 1
    getClimb(n, memo)
    return memo[n]
};

// 动态规划
var climbStairs = function(n) {
    let memo = Array(n)
    memo[0] = memo[1] = 1
    for (var i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
};