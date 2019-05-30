/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

function sortNumber(a, b) {
    return a - b
}
/*faster than 77%*/
var fourSumCount = function(A, B, C, D) {
    let abMap = new Map()
    let cdMap = new Map()
    let count = 0

    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            abMap.set(A[i] + B[j], ~~abMap.get(A[i] + B[j]) + 1)
            cdMap.set(C[i] + D[j], ~~cdMap.get(C[i] + D[j]) + 1)
        }
    }
    for (let key of abMap.keys()) {
        if (cdMap.get(-key)){
            count += abMap.get(key) * cdMap.get(-key)
        }
    }
    return count
};

/*faster than 89%*/
var fourSumCount = function(A, B, C, D) {
    let abMap = new Map()
    let count = 0

    for (let a of A) {
        for (let b of B) {
            if (abMap.get(a + b)){
                abMap.set(a + b, abMap.get(a + b) + 1)
            }else {
                abMap.set(a + b, 1)
            }
        }
    }

    for (let c of C) {
        for (let d of D) {
            if (abMap.get(-(c + d))){
                count += abMap.get(-(c + d))
            }
        }

    }
    return count
};

/*faster than 86%*/
var fourSumCount = function(A, B, C, D) {
    let abMap = new Map()
    let count = 0

    A.forEach((a)=>{
        B.forEach((b)=> {
            abMap.set(a + b, ~~abMap.get(a + b) + 1)
        })
    })
    C.forEach((c)=>{
        D.forEach((d)=> {
            if (abMap.get(-(c + d))){
                count += abMap.get(-(c + d))
            }
        })
    })
    return count
};