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
 * @return {number}
 */

// recursion
var pathSum = function(root, sum) {
    if (root == null) return 0
    return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var findPath = function (root, sum) {
    let res = 0
    if (root == null) return 0
    if (sum == root.val){
        res += 1
    }
    res += findPath(root.left, sum - root.val)
    res += findPath(root.right, sum - root.val)
    return res
}


// map
// 1. compute sum for root to this node
// 2. set root to this node sum in map
// 3. map includes all sum that root to any node
// 4. search root to this node sum minus root to any node equal sum

var pathSum = function(root, sum) {
    let preMap = new Map()
    preMap.set(0, 1)
    return findPath(root, sum, 0, preMap)
};

var findPath = function (root, sum, cur, preMap) {
    let res = 0
    if (root == null) return 0

    cur += root.val
    if (preMap.has(cur - sum)){
        res += preMap.get(cur - sum)
    }
    if (preMap.has(cur)){
        preMap.set(cur, preMap.get(cur) + 1)
    }else {
        preMap.set(cur, 1)
    }

    res += findPath(root.left, sum, cur, preMap) + findPath(root.right, sum, cur, preMap)
    preMap.set(cur, preMap.get(cur) - 1)
    return res
}