/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    return addToBST(nums, 0, nums.length - 1)
};

var addToBST = function(nums, l, r) {
    if (l > r) return null
    let mid = Math.floor(l + (r - l)/2)
    let root = new TreeNode(nums[mid])
    root.left = addToBST(nums, l, mid - 1)
    root.right = addToBST(nums, mid + 1, r)
    return root
};