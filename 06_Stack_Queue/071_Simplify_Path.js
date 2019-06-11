/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let dir = path.split('/')
    let arr = []
    let str = ''
    dir.forEach((item)=>{
        if (item == '..'){
            arr.pop()
        }else if (item != '' && item != '.'){
            arr.push(item)
        }
    })
    if (arr.length == 0) return '/'
    arr.forEach((item) => {
        str += '/' + item
    })
    return str
};