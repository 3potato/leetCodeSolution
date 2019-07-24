/**
 * @param {string} s
 * @return {string[]}
 */
var res = []
var getIpAddresses = function(s, path, count) {
    if (count == 5 || s.length == 0){
        if (count == 5 && s.length == 0){
            res.push(path.substring(1))
        }
        return
    }
    for (var i = 1; i < 4 && i <= s.length; i++) {
        let part = s.substring(0, i)
        if (part <= 255){
            getIpAddresses(s.substring(i), path + '.' + part, count + 1)
        }
        if (part == 0){
            break
        }
    }
};
var restoreIpAddresses = function(s) {
    res = []
    getIpAddresses(s, '', 1)
    return res
};