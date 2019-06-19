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
var sumOfLeftLeaves = function(root) {
    return computeSum(root, false)
};

var computeSum = (root, isLeft) => {
    if (root == null) return 0
    if (root.left == null && root.right == null && isLeft) return root.val
    return computeSum(root.left, true) + computeSum(root.right, false)
}