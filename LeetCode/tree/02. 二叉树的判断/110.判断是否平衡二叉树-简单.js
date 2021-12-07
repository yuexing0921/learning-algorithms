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

/**
 * 110.判断是否平衡二叉树：深度递归
 * @param {TreeNode} root
 * @return {boolean}
 */
const process = function (node) {
  if (!node) {
    return {
      isBalanced: true,
      height: 0,
    };
  }
  const leftData = process(node.left);
  const rightData = process(node.right);
  // 获取左右两边的高度，取最高值
  const height = Math.max(leftData.height, rightData.height) + 1;
  const isBalanced =
    leftData.isBalanced &&
    rightData.isBalanced &&
    Math.abs(leftData.height - rightData.height) < 2;
  return {
    isBalanced,
    height,
  };
};
var isBalanced = function (root) {
  return process(root).isBalanced;
};
