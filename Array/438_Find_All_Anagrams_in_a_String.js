/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let l = 0
    let r = l + 2
    let length = s.length
    let obj =
    for (let i = 0; i < p.length; i++){
        obj[p[i]] = 0
    }
    for (let r = 0; r < s.length; r++){

        if (obj[s[r]] == 0){
            obj[s[r]] == 1
        }
        Object.keys(obj).forEach((item) => {
            obj[item] == 0

        })


    }

    let tar = p.split('')
    for (let r = 0; r < s.length; r++){

        if (obj[s[r]] == 0){
            obj[s[r]] == 1
        }
        Object.keys(obj).forEach((item) => {
            obj[item] == 0

        })


    }

};