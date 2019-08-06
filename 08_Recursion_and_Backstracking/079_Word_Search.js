/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var inArea = function(m, n, x, y) {
    return x >= 0 && x < m && y >= 0 && y < n
}

var getExist = function(board, word, index, i, j, visit, m, n) {
    let direct = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    if(index == word.length - 1) {
        return word.charAt(index) == board[i][j]
    }

    if(word.charAt(index) == board[i][j]) {
        visit[i] ? '' : visit[i] = []
        visit[i][j] = true
        for (var k = 0; k < 4; k++) {
            let newI = i + direct[k][0]
            let newJ = j + direct[k][1]
            visit[newI] ? '' : visit[newI] = []
            if(inArea(m, n, newI, newJ) && !visit[newI][newJ] && getExist(board, word, index + 1, newI, newJ, visit, m, n)) {
                return true
            }
        }
        visit[i][j] = false
    }
    return false

};

var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    let visit = []

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if(getExist(board, word, 0, i, j, visit, m, n)) {
                return true
            }
        }
    }
    return false
};