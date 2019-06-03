/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr = str.split(' ')
    let map = new Map()
    if(pattern.length != arr.length){
        return false
    }
    for (var i = 0; i < arr.length; i++) {
        if (map.has(pattern[i])){
            if (map.get(pattern[i]) != arr[i]){
                return false
            }
        }else {
            for (var value of map.values()) {
                if (value == arr[i]){
                    return false
                }
            }
            map.set(pattern[i], arr[i])
        }
    }
    return true
};