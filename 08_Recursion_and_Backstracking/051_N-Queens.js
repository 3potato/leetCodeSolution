/**
 * @param {number} n
 * @return {string[][]}
 */


var putQueen = function(res, n, col, leftDiag, rightDiag, index, position) {

    if(index == n) res.push(generateQueen(n, position))

    for (var i = 0; i < n; i++) {
        if(!col[i] && !leftDiag[index + i] && !rightDiag[index - i + n - 1]) {
            col[i] = true
            leftDiag[index + i] = true
            rightDiag[index - i + n - 1] = true
            position.push(i)

            putQueen(res, n, col, leftDiag, rightDiag, index + 1, position)

            col[i] = false
            leftDiag[index + i] = false
            rightDiag[index - i + n - 1] = false
            position.pop()

        }
    }
};

var generateQueen = function(n, position) {
    return position.map(col =>
        '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)
    )
};

var solveNQueens = function(n) {
    let res = []
    putQueen(res, n, [], [], [], 0, [])
    return res
};