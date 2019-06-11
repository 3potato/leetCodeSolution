/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let stack = []
    let ret = []
    if (root == null) return []
    stack.push(root)
    while (stack.length != 0){
        let cur = stack.pop()
        ret.unshift(cur.val)
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return ret
};