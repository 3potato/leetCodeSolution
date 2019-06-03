/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let arr = s.split('')
    let map = new Map()
    let rec = new Array(s.length + 1)
    let ret = []

    for (var i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) > 0){
            map.set(arr[i], map.get(arr[i]) + 1)
        }else {
            map.set(arr[i], 1)
        }

    }

    for (var [key, value] of map.entries()) {
        rec[value] ? rec[value].push(key) : rec[value] = [key]
    }

    for (var i = rec.length; i >= 0; i--) {
        if (rec[i] != undefined){
            for (var j = 0; j < rec[i].length; j++) {
                for (var k = 0; k < i; k++) {
                    ret.push(rec[i][j])
                }

            }
        }
    }
    return ret.join('')
};