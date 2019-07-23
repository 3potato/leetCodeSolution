/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = []
    let cur = root
    while (cur != null || stack.length != 0){
        while (cur != null) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        k--
        if (k == 0) {
            return cur.val
        }
        cur = cur.right
    }
};
