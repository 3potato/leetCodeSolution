/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let aMap = new Map()
    let arr = []
    if(s.length !== t.length){
        return false
    }
    for (var i = 0; i < s.length; i++) {
        if (!aMap.has(s[i])){
            aMap.set(s[i], 1)
        }else {
            aMap.set(s[i], +aMap.get(s[i]) + 1)
        }
    }
    for (var j = 0; j < t.length; j++) {
        if (aMap.get(t[j]) > 0){
            arr.push(j[j])
            aMap.set(t[j], +aMap.get(t[j]) - 1)
        }
    }
    return arr.length == s.length
};