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
var levelOrderBottom = function(root) {
    let res = []
    if (root == null) return res
    traverseTree(res, root, 0)
    return res
};
var traverseTree = function (res, root, index) {
    if (res.length <= index) {
        res.unshift([])
    }
    res[res.length - 1 - index].push(root.val)
    if (root.left != null)  traverseTree(res, root.left, index + 1)
    if (root.right != null)  traverseTree(res, root.right, index + 1)
}

// BFS
var levelOrderBottom = function(root) {
    let res = []
    let queue = new Array()
    if (root == null)  return res
    queue.push(root)
    while (queue.length != 0){
        let sum = queue.length
        let arr = []
        for (let count = 1; count <= sum; count++){
            if (queue[0].left != null)  queue.push(queue[0].left)
            if (queue[0].right != null)  queue.push(queue[0].right)
            arr.push(queue.shift().val)
        }
        res.unshift(arr)
    }
    return res
};