/**
 * @param {string} digits
 * @return {string[]}
 */
let res = []
let getCombinations = function (digits, index, alp) {
    let map = [
        " ",    //0
        "",     //1
        "abc",  //2
        "def",  //3
        "ghi",  //4
        "jkl",  //5
        "mno",  //6
        "pqrs", //7
        "tuv",  //8
        "wxyz"  //9
    ]
    if (index > digits.length - 1){
        return res.push(alp)
    }
    for (var i = 0; i < map[digits[index]].length; i++) {
        let digit = map[digits[index]][i];
        getCombinations(digits, index + 1, alp + digit)
    }
}

var letterCombinations = function(digits) {
    if (digits == '') return []
    res = []
    getCombinations(digits, 0, '')
    return res
};