/**
 * @param {number} n
 * @return {number}
 */

//  192 ms
var numSquares = function(n) {
    let arr = []
    return getCount(arr, n)
};
var getCount = function (arr, n) {
    if (n == 0) return 0
    if (n == 1) return 1
    let count = 0
    if (arr[n]) return arr[n]
    for (var i = 1; i * i <= n; i++) {
        if (count == 0) count = getCount(arr, n - i * i) + 1
        else count = Math.min(getCount(arr, n - i * i) + 1, count)
    }
    arr[n] = count
    return count
}

// 144 ms    Dynamic Programming
var numSquares = function(n) {
    let arr = new Array();
    arr[0] = 0;
    for(let i = 1; i <= n; i++) {
        let count = 0
        for(let j = 1; i - j * j >= 0; j++) {
            if (count == 0) count = arr[i - j * j] + 1
            else count = Math.min(count, arr[i - j * j] + 1);
        }
        arr[i] = count;
    }
    return arr[n];
};


// 208 ms   BFS
var numSquares = function(n) {
    let queue = new Array();
    let visit = new Array()
    queue.push({val: n, step: 0})
    visit[n] = true
    while (queue.length > 0){
        let num = queue.shift()
        if (num.val == 0){
            return num.step
        }
        for(let i = 1; num.val - i * i >= 0; i++) {
            if (visit[num.val - i * i ] != true){
                queue.push({val: num.val - i * i,  step: num.step + 1})
                visit[num.val - i * i ] = true
            }
        }
    }
};
