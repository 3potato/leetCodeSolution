/**
 * @param {string[]} tokens
 * @return {number}
 */
let cmpNum = function (b, a, mode) {
    if (mode == '+'){
        return +a + +b
    }else if (mode == '-'){
        return +a - +b
    }else if (mode == '*'){
        return Math.floor(+a * +b)
    }else if (mode == '/'){
        if(+a / +b >= 0){
            return Math.floor(+a / +b)
        }else {
            return Math.ceil(+a / +b)
        }
    }
}
var evalRPN = function(tokens) {
    let stack = new Array()
    for (let t of tokens) {
        if (t == '+'){
            stack.push( cmpNum(stack.pop(), stack.pop(), '+') )
        }else if (t == '-'){
            stack.push( cmpNum(stack.pop(), stack.pop(), '-') )
        }else if (t == '*'){
            stack.push( cmpNum(stack.pop(), stack.pop(), '*') )
        }else if (t == '/'){
            stack.push( cmpNum(stack.pop(), stack.pop(), '/') )
        }else {
            stack.push(t)
        }
    }
    return stack.pop()
};