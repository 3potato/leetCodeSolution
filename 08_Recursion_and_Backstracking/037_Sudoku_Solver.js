/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    putNum(board, 0)
};

var putNum = function(board, i) {
    if (i >= 81) return true
    let row = Math.floor(i / 9)
    let col = Math.floor(i % 9)
    if(board[row][col] != '.'){
        return putNum(board, i + 1)
    }else {
        for (var c = 1; c <= 9; c++) {
            if(!inRow(board, row, c) && !inCol(board, col, c) && !inRect(board, row, col, c)){
                board[row][col] = c + ''
                if(putNum(board, i + 1)){
                    return true
                }else {
                    board[row][col] = '.'
                }
            }
        }
        return false
    }
};

var inRow = function(board, row, c) {
    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] == c) return true
    }
    return false
};

var inCol = function(board, col, c) {
    for (var i = 0; i < 9; i++) {
        if (board[i][col] == c) return true
    }
    return false
};

var inRect = function(board, row, col, c) {
    let rectTop = Math.floor(row / 3)
    let rectLeft = Math.floor(col / 3)
    for (var i = rectTop * 3; i < (rectTop + 1) * 3; i++) {
        for (var j = rectLeft * 3; j < (rectLeft + 1) * 3; j++) {
            if (board[i][j] == c) return true
        }
    }
    return false
};