/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let arr = s.split('')
    let map = new Map()
    if(s.length != t.length){
        return false
    }
    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])){
            if (map.get(arr[i]) != t[i]){
                return false
            }
        }else {
            for (var value of map.values()) {
                if (value == t[i]){
                    return false
                }
            }
            map.set(arr[i], t[i])
        }
    }
    return true
};