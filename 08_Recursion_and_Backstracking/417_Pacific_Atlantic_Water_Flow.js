/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
let direct = [[-1, 0], [0, 1], [1, 0], [0, -1]]

var pacificAtlantic = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return []
    let res = []
    let m = matrix.length
    let n = matrix[0].length
    let visitPacific = Array.from(Array(m), () => Array(n).fill(false))
    let visitAtlantic = Array.from(Array(m), () => Array(n).fill(false))

    for (var i = 0; i < m; i++) {
        dfs(matrix, i, 0, matrix[i][0], visitPacific)
        dfs(matrix, i, n - 1, matrix[i][n - 1], visitAtlantic)
    }

    for (var j = 0; j < n; j++) {
        dfs(matrix, 0, j, matrix[0][j], visitPacific)
        dfs(matrix, m - 1, j, matrix[m - 1][j], visitAtlantic)
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if(visitPacific[i][j] && visitAtlantic[i][j]) {
                res.push([i, j])
            }
        }
    }

    return res
};

var dfs = function(matrix, m, n, val, visit) {
    if (m >= 0 && m < matrix.length && n >= 0 && n < matrix[0].length && matrix[m][n] >= val && !visit[m][n]){
        visit[m][n] = true
        for (var i = 0; i < direct.length; i++) {
            var newM = m + direct[i][0]
            var newN = n + direct[i][1]
            dfs(matrix, newM, newN, matrix[m][n], visit)
        }
    }
}