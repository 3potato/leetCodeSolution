/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var swap = function (root, a, b) {
    root.left = b
    root.right = a
}
var invertTree = function(root) {
    if (root) {
        let right = root.right
        root.right = invertTree(root.left)
        root.left = invertTree(right)
    }
    return root
};
