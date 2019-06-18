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
var maxDepth = function(root) {
    return traverse(root, 0, 0)
};

var traverse = function(root, max, dep) {
    if (root == null && dep > max){
        return dep
    }
    if (root != null) max = traverse(root.left, max, dep + 1)
    if (root != null) max = traverse(root.right, max, dep + 1)
    return max
};


var maxDepth = function(root) {
    if (root == null) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};