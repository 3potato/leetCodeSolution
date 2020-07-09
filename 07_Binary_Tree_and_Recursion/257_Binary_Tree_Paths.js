/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    if (root == null) return res
    if (root.left == null && root.right == null) {
        res.push(root.val + '')
        return res
    }
    let left = binaryTreePaths(root.left)
    let right = binaryTreePaths(root.right)
    for (let item of left) {
        res.push(root.val + '->' + item)
    }
    for (let item of right) {
        res.push(root.val + '->' + item)
    }
    return res

};