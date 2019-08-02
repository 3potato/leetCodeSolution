/**
 * @param {number} num
 * @return {string[]}
 */

var generateNums = function (res, arr, nums, sum, start, flag) {
    if (nums == 0){
        res.push(sum)
        return
    }
    for (var i = start; i < arr.length; i++) {
        if (sum + arr[i] >= flag) continue
        generateNums(res, arr, nums - 1, sum + arr[i], i + 1, flag)
    }
}

var readBinaryWatch = function(num) {
    let hMap = [1, 2, 4, 8]
    let mMap = [1, 2, 4, 8, 16, 32]
    let res = []
    for (var i = 0; i <= num; i++) {
        let hRes = []
        let mRes = []
        generateNums(hRes, hMap, i, 0, 0, 12)
        generateNums(mRes, mMap, num - i, 0, 0, 60)
        for (var j = 0; j < hRes.length; j++) {
            for (var k = 0; k < mRes.length; k++) {
                res.push(hRes[j] + ':' + (mRes[k] < 10 ? '0' + mRes[k] : mRes[k]))
            }
        }
    }
    return res
};