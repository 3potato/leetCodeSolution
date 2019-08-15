/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
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