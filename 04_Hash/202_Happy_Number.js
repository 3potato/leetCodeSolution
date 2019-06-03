/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hastSet = new Set()
    let sum
    while (n) {
        sum = 0
        while (n > 0){
            let temp = n % 10
            sum += temp * temp
            n = Math.floor(n/10)
        }
        if (sum == 1){
            return true
        }
        if (hastSet.has(sum)){
            return false
        }else {
            hastSet.add(sum)
        }
        n = sum
    }
};