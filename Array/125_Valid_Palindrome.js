/**
 * @param {string} s
 * @return {boolean}
 */



var isLetter = function(code) {
    if (
        ((code >= 48) && (code <= 57))  // numbers
        || ((code >= 65) && (code <= 90))  // uppercase
        || ((code >= 97) && (code <= 122))
    ) {  // lowercase
        return true
    } else {
        return false
    }
}



var isPalindrome = function(s) {
    let l = 0
    let r = s.length - 1
    while (l<r) {
        if (!isLetter(s.charCodeAt(l))){
            l++
            continue
        }
        if (!isLetter(s.charCodeAt(r))){
            r--
            continue
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()){
            return false
        }else {
            l++
            r--
        }
    }
    return true
};
