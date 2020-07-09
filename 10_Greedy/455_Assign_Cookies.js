/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 由小到大
var findContentChildren = function(g, s) {

    g.sort((a, b) => {
        return a - b
    })
    s.sort((a, b) => {
        return a - b
    })

    let m = 0 , n = 0, res = 0
    while(m < g.length && n < s.length){

        if (g[m] <= s[n]){
            res++
            m++
            n++
        }else {
            n++
        }
    }
    return res
};


// 由大到小
var findContentChildren = function(g, s) {

    g.sort((a, b) => {
        return b - a
    })
    s.sort((a, b) => {
        return b - a
    })

    let m = 0 , n = 0, res = 0
    while(m < g.length && n < s.length){

        if (g[m] <= s[n]){
            res++
            m++
            n++
        }else {
            m++
        }
    }
    return res
};