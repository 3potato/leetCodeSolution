/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for (var str of strs) {
        let key = str.split('').sort().join('')
        if (!map[key]){
            map[key] = []
        }
        map[key].push(str)
    }
    return Object.values(map)
};