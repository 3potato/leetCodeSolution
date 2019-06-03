/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let freq = new Array()
    let l = 0
    let r = 0
    let count = t.length
    let minLen = s.length + 1
    let start = 0

    for (var i = 0; i < t.length; i++) {
        freq[t[i]] ? freq[t[i]]++ : freq[t[i]] = 1
    }

    while (r < s.length){
        if (freq[s[r]] >= 1) {
            count--
        }
        if (freq[s[r]] != undefined) {
            freq[s[r]]--
        }
        r++

        while (count == 0) {
            if (r - l < minLen) {
                start = l
                minLen = r - l
            }

            if (freq[s[l]] >= 0) {
                count++
            }
            if (freq[s[l]] != undefined) {
                freq[s[l]]++
            }
            l++
        }
    }

    if (minLen == s.length + 1){
        return ''
    }

    return s.substring(start, start + minLen)
};