/**
 * @param {number[][]} intervals
 * @return {number}
 */

var eraseOverlapIntervals = function(intervals) {
    if (intervals.length == 0 ) return 0
    let n = intervals[0].length - 1
    intervals.sort((a, b) => {
        return a[n] - b[n]
    })
    let pre = 0, res = 1
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= intervals[pre][n]){
            res++
            pre = i
        }
    }
    return intervals.length - res
};