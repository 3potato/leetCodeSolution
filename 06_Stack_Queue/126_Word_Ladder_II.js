/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let queue = new Array()
    let visit = {}
    let res = []
    queue.push({list: wordList, val: beginWord, ret: [beginWord]})
    visit[beginWord] = 1
    while(queue.length != 0) {
        let start = queue.shift()
        if (start.val == endWord) {
            res.push(start.ret)
            continue
        }
        for (var i = 0; i < start.list.length; i++) {
            let word = start.list[i];
            let count = 0
            for (var j = 0; j < start.val.length; j++) {
                if (word[j] != start.val[j]) {
                    count++
                    if(count == 2){
                        break
                    }
                }
            }
            if (count == 1) {
                if(visit[word] == undefined || visit[word] > start.ret.length + 1){
                    let list = start.list.concat()
                    let ret = start.ret.concat()
                    list.splice(i, 1)
                    ret.push(word)
                    queue.push({list: list, val: word, ret: ret})
                    visit[word] = ret.length + 1
                }
            }
        }
    }
    return res
};