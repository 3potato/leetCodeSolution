/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = []
    let arr = treePath(root)
    for (let item of arr) {
        res += item
    }
    return res
};

var treePath = function(root) {
    let res = []
    if (root == null) return res
    if (root.left == null && root.right == null){
        res.push(root.val)
        return res
    }
    let left = treePath(root.left)
    let right = treePath(root.right)
    for (let item of left) {
        res.push('' + root.val + item)
    }
    for (let item of right) {
        res.push('' + root.val + item)
    }
    return res
};

