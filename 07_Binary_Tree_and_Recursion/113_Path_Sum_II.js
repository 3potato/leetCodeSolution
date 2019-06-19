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
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
    let res = []
    if (root == null) return res
    if (root.left == null && root.right == null) {
        if (root.val == sum) {
            res.push([root.val])
        }
        return res
    }
    let left = pathSum(root.left, sum - root.val)
    let right = pathSum(root.right, sum - root.val)
    if (left[0] && left[0].length > 0) {
        for (let item of left) {
            item.unshift(root.val)
            res.push(item)
        }
    }
    if (right[0] && right[0].length > 0) {
        for (let item of right) {
            item.unshift(root.val)
            res.push(item)
        }
    }
    return res
};



var pathSum = function(root, sum) {
    let res = []
    let cur = []
    computeSum(root, sum, res, cur)
    return res
};

var computeSum = function(root, sum, res, cur) {
    if (root == null) return
    cur.push(root.val)
    if (root.left == null && root.right == null && sum == root.val){
        res.push(cur)
        return res
    }
    computeSum(root.left, sum - root.val, res, cur.concat())
    computeSum(root.right, sum - root.val, res, cur.concat())
};