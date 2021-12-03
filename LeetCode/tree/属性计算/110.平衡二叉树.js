// https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * 自顶向下（暴力）：
 * 求左子树的深度，右子树的深度，
 * 两个深度相减，如果绝对值小于1，递归判断左子树，右子树
 * @param {TreeNode} root
 * @return {boolean}
 */
const depth = function (node) {
  if (!node) return 0;
  const left = depth(node.left);
  const right = depth(node.right);
  return Math.max(left, right) + 1;
};
var isBalanced = function (root) {
  if (!root) return true;
  const left = depth(root.left);
  const right = depth(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
