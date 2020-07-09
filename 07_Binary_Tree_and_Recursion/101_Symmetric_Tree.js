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
// solution 1
var isSymmetric = function(root) {
    if (root == null) return true
    root.left = invertTree(root.left)
    return isSameTree(root.left, root.right)
};

var invertTree = function(root) {
    if (root) {
        let right = root.right
        root.right = invertTree(root.left)
        root.left = invertTree(right)
    }
    return root
};

var isSameTree = function(p, q) {
    if (p != null && q != null && p.val == q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
    return p == q
};


// solution 2
var isSymmetric = function(root) {
    if (root == null) return true
    return isMirror(root.left, root.right)
};

var isMirror = function(p, q) {
    if (p !=null && q != null &&  p.val == q.val){
        return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    }
    return p == q
};
