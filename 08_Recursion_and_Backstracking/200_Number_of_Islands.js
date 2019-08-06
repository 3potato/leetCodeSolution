/**
 * @param {character[][]} grid
 * @return {number}
 */
var inArea = function(m, n, x, y) {
    return x >= 0 && x < m && y >= 0 && y < n
}

var getNumIslands = function(grid, i, j, visit, m, n) {
    let direct = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    visit[i] ? '' : visit[i] = []
    visit[i][j] = true
    for (var k = 0; k < 4; k++) {
        let newI = i + direct[k][0]
        let newJ = j + direct[k][1]
        if(inArea(m, n, newI, newJ) && !(visit[newI] && visit[newI][newJ]) && grid[newI][newJ] == 1) {
            getNumIslands(grid,  newI, newJ, visit, m, n)
        }
    }
};
var numIslands = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0
    let m = grid.length
    let n = grid[0].length
    let visit = []
    let count = 0

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if(grid[i][j] == 1 && !(visit[i] && visit[i][j])) {
                getNumIslands(grid, i, j, visit, m, n)
                count++
            }
        }
    }
    return count
};
