// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 1. 后序遍历-递归法-左右中
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var postorderTraversal = function (root) {
//   const result = [];
//   const dfs = function (node) {
//     if (!node) {
//       return;
//     }
//     dfs(node.left);
//     dfs(node.right);
//     result.push(node.val);
//   };
//   dfs(root);
//   return result;
// };
/**
 * 2. 后序遍历-迭代法-左右中，和前序遍历（中左右）反过来（左右中）
 * 关键是栈的顺序
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      result.unshift(root.val);
      stack.push(root);
      // 先把右边遍历完成
      root = root.right;
    }
    // 再把左边遍历完成
    root = stack.pop();
    root = root.left;
  }
  return result;
};
