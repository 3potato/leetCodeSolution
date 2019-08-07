/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let direct = [[-1, 0], [0, 1], [1, 0], [0, -1]]
var bfs = function(board, m, n, i, j, visit) {
    let transList = [], canTrans= true, queue = [[i, j]]
    while(queue.length) {
        let [newI, newJ] = queue.shift()
        if(board[newI][newJ] == 'X' || (visit[newI] && visit[newI][newJ])) continue
        if(newI == 0 || newI == m - 1 || newJ == 0 || newJ == n - 1) {
            canTrans = false
            continue
        }
        visit[newI][newJ] = true
        for (var k = 0; k < 4; k++) {
            queue.push([newI + direct[k][0], newJ + direct[k][1]])
        }
        transList.push([newI, newJ])
    }
    while(canTrans && transList.length) {
        let [i, j] = transList.shift()
        board[i][j] = 'X'
    }
}
var solve = function(board) {
    if(board.length == 0 || board[0].length == 0) return board
    let m = board.length
    let n = board[0].length
    let visit = Array.from(Array(m), () => Array(n).fill(false))
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] == 'O'){
                bfs(board, m, n, i, j, visit)
            }
        }
    }
    return board
};