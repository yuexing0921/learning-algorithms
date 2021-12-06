// https://leetcode-cn.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 98. 验证二叉搜索树 - dfs
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dst = function (node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dst(node.left, min, node.val) && dst(node.right, node.val, max);
  };
  return dst(root, -Infinity, Infinity);
};
