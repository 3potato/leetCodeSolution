/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return false
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
    if (p.val == root.val || q.val == root.val || (root.val - p.val) * (root.val - q.val) < 0) return root
};