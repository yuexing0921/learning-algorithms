//leetcode-cn.com/problems/balanced-binary-tree/
// 110. 平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 暴力解法
 * @param {TreeNode} root
 * @return {boolean}
 */
const depth = function (node) {
  if (!node) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1;
};
var isBalanced = function (root) {
  if (!root) return true;
  return (
    Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
