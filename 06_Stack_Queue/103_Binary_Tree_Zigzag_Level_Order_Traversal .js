/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// DFS
var zigzagLevelOrder = function(root) {
    let res = []
    if (root == null) return res
    traverseTree(res, root, 0)
    return res


};
var traverseTree = function (res, root, index) {
    if (res.length <= index) {
        res.push([])
    }
    if(index % 2 == 0){
        res[index].push(root.val)
    }else {
        res[index].unshift(root.val)
    }
    if (root.left != null)  traverseTree(res, root.left, index + 1)
    if (root.right != null)  traverseTree(res, root.right, index + 1)
}


// BFS
var zigzagLevelOrder = function(root) {
    let res = []
    let queue = new Array()
    let order = true
    if (root == null)  return res
    queue.push(root)
    while (queue.length != 0){
        let sum = queue.length
        let arr = []
        for (let count = 1; count <= sum; count++){
            if (queue[0].left != null)  queue.push(queue[0].left)
            if (queue[0].right != null)  queue.push(queue[0].right)
            if (order){
                arr.push(queue.shift().val)
            }else {
                arr.unshift(queue.shift().val)
            }
        }
        order = !order
        res.push(arr)
    }
    return res
};
