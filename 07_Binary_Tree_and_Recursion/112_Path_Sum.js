/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return computeSum(root, sum, 0)
}


var computeSum = function(root, sum, target) {
    if (root == null){
        return -1
    }
    let left = computeSum(root.left, sum, target + root.val)
    if (left === true) return true
    let right = computeSum(root.right, sum, target + root.val)
    if (right === true) return true

    if (left == -1 && right == -1){
        return target + root.val == sum
    }
    return false
};


var hasPathSum = function(root, sum) {
    if (root == null) return false
    if (root.left == null && root.right == null) return root.val == sum
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};