/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = new Array()
    let visit = {}
    queue.push({list: wordList, val: beginWord, step: 1})
    visit[beginWord] = 0
    while(queue.length != 0) {
        let start = queue.shift()
        if (start.val == endWord) {
            return start.step
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
            if (count == 1){
                if(visit[word] == undefined || visit[word] > start.step){
                    let list = start.list.concat()
                    list.splice(i, 1)
                    queue.push({list: list, val: word, step: start.step + 1})
                    visit[word] = start.step
                }
            }
        }
    }
    return 0
};