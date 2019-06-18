/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) return true
    let left = isBalanced(root.left)
    if( left === false ) return false
    let right = isBalanced(root.right)
    if( right === false ) return false
    if (Math.abs(left - right) > 1) return false
    return Math.max(left, right) + 1
};