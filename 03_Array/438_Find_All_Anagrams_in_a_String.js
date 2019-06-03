/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let freq = new Array()
    let l = 0
    let count = p.length
    let ret = []
    for (var i = 0; i < p.length; i++) {
        freq[p[i]] ? freq[p[i]]++ : freq[p[i]] = 1
    }

    for (var r = 0; r < s.length; r++) {
        if (freq[s[r]] >= 1){
            count --
        }
        if (freq[s[r]] != undefined){
            freq[s[r]] --
        }
        if (r - l == p.length - 1){
            if (count == 0){
                ret.push(l)
            }
            if (freq[s[l]] >= 0){
                count ++
            }
            if (freq[s[l]] != undefined){
                freq[s[l]] ++
            }
            l++
        }
    }
    return ret

};