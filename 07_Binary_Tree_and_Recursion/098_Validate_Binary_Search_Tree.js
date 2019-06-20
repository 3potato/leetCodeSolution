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

var isValidBST = function(root) {
    if (root == null) return true
    return isBST(root, null, null)
};
var isBST = function(root, min, max) {
    if (root == null) return true
    if (min != null && root.val <= min || max != null && root.val >= max) return false
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
};


// inorder traversal
var isValidBST = function(root) {
    if (root == null) return true
    let stack = []
    let pre = null
    while (root != null || stack.length != 0) {
        while (root != null){
            stack.push(root)
            root= root.left
        }
        root = stack.pop()
        if (pre != null && pre.val >= root.val) return false
        pre = root
        root = root.right
    }
    return true
};
